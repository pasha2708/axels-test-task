import { SagaIterator } from "redux-saga";
import { call, takeEvery, put, all } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import {
	fetchPreview,
	fetchImage,
	postComment,
	deleteComment,
	editComment,
} from "../api";
import { FullImageTypes, setFullImage, setImages } from "./reducer";
import { ImageTypes } from "./reducer";
import { AppDispatch } from "./store";
import { PayloadAction } from "@reduxjs/toolkit";

export function* fetchGetPreview(): SagaIterator {
	try {
		const previewImages: Array<ImageTypes> = yield call(fetchPreview);
		yield put(setImages(previewImages));
	} catch (e) {
		console.error(e);
	}
}

export function* fetchFullImage({ payload }: any): SagaIterator {
	try {
		const fullImage: FullImageTypes = yield call(fetchImage, payload);
		yield put(setFullImage(fullImage));
	} catch (e) {
		console.error(e);
	}
}

export function* sendCommentSaga({ payload }: any): SagaIterator {
	try {
		const data = yield call(postComment, payload);
		yield put(setFullImage(data));
	} catch (e) {
		console.error(e);
	}
}

export function* deleteCommentSaga({ payload }: any): SagaIterator {
	try {
		const data = yield call(deleteComment, payload);
		yield put(setFullImage(data));
	} catch (e) {
		console.error(e);
	}
}

export function* editCommentSaga({ payload }: any): SagaIterator {
	try {
		const data = yield call(editComment, payload);
		yield put(setFullImage(data));
	} catch (e) {
		console.error(e);
	}
}

export default function* rootSaga() {
	yield all([
		takeEvery(sagaActions.FETCH_IMAGES, fetchGetPreview),
		takeEvery(sagaActions.FETCH_FULL_IMAGE, fetchFullImage),
		takeEvery(sagaActions.SEND_COMMENT, sendCommentSaga),
		takeEvery(sagaActions.DELETE_COMMENT, deleteCommentSaga),
		takeEvery(sagaActions.EDIT_COMMENT, editCommentSaga),
	]);
}
