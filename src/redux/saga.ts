import { SagaIterator } from "redux-saga";
import { call, takeEvery, put, all } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import { fetchPreview, fetchImage, postComment } from "../api";
import { FullImageTypes, setFullImage, setImages } from "./reducer";
import { ImageTypes } from "./reducer";
import { AppDispatch } from "./store";
import { PayloadAction } from "@reduxjs/toolkit";

export function* fetchGetPreview(): SagaIterator {
	try {
		const previewImages: Array<ImageTypes> = yield call(fetchPreview);
		yield put(setImages(previewImages));
	} catch (e) {
		console.log(e);
	}
}

export function* fetchFullImage({ payload }: any): SagaIterator {
	try {
		const fullImage: FullImageTypes = yield call(fetchImage, payload);
		yield put(setFullImage(fullImage));
	} catch (e) {
		console.log(e);
	}
}

export default function* rootSaga() {
	yield all([
		takeEvery(sagaActions.FETCH_IMAGES, fetchGetPreview),
		takeEvery(sagaActions.FETCH_FULL_IMAGE, fetchFullImage),
	]);
}
