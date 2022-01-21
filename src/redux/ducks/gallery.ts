import { ActionType } from '@redux-saga/types';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import { fetchPreview, fetchImage, postComment } from '../../api';

// Actions

export interface GetFullImageActionType {
  type: typeof GET_FULL_IMAGE;
  payload: Object;
}

export const GET_PREVIEW = 'GET_PREVIEW';
export const RECIEVE_PREVIEW = 'RECIEVE_PREVIEW';
export const GET_FULL_IMAGE = 'GET_FULL_IMAGE';
export const RECIEVE_FULL_IMAGE = 'RECIEVE_FULL_IMAG';
export const SET_LOADED_FALSE = 'SET_LOADED_FALSE';
export const SETTING_LOADING_FALSE = 'SETTING_LOADING_FALSE';
export const SEND_COMMENT = 'SEND_COMMENT';
export const POST_COMMENT = 'POST_COMMENT';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';

// Reducer

export type BasicStateType = {
  isLoaded: boolean,
  images: RecievePreviewTypes[]
  fullImage: recieveFullImgTypes
}

const basicState: BasicStateType = {
  isLoaded: false,
  images: [],
  fullImage: {
    url: undefined,
    id: undefined,
    comments: []
  }
};

export default function reducer(state = basicState, action: any) { //!!!!!!!!!!!!!!!!!!!!!!!!!
  switch (action.type) {
    case RECIEVE_PREVIEW:
      const images: any  = action.payload.data;
      return { ...state, images };

    case RECIEVE_FULL_IMAGE:
      const fullImage = action.payload.data;
      return { ...state, fullImage, isLoaded: true };

    case SETTING_LOADING_FALSE:
      return { ...state, isLoaded: false };

    case ADD_NEW_COMMENT:
      const comment = action.payload.data;
      return {
        ...state,
        fullImage: {
          ...state.fullImage,
          comments: [...state.fullImage.comments, comment],
        },
      };

    default:
      return state;
  }
}

// Action Creators

export type RecievePreviewTypes = {
  url: string,
  id: number
}

type recieveFullImgTypes = {
  url?: string,
  id?: number,
  comments: CommentTypes[]
}

export type CommentTypes = {
  id: number,
  date: number,
  comment?: string,
  text?: string,
  name?: string
}

type recievePreviewActionTypes = {
  type: typeof RECIEVE_PREVIEW,
  payload: Object
}

type recieveFullImgActionTypes = {
  type: typeof RECIEVE_FULL_IMAGE,
  payload: Object
}

type settingLoadingFalseActionTypes = {
  type: typeof SETTING_LOADING_FALSE,
  payload: Object
}

type addNewCommentActionTypes = {
  type: typeof ADD_NEW_COMMENT,
  payload: Object
}

export const recievePreview = (data: Array<RecievePreviewTypes>): recievePreviewActionTypes => ({
  type: RECIEVE_PREVIEW,
  payload: { data },
});

export const recieveFullImg = (data: recieveFullImgTypes): recieveFullImgActionTypes => ({
  type: RECIEVE_FULL_IMAGE,
  payload: { data },
});

export const settingLoadingFalse = (data: Boolean): settingLoadingFalseActionTypes  => ({
  type: SETTING_LOADING_FALSE,
  payload: { data },
});

export const addNewComment = (data: CommentTypes): addNewCommentActionTypes => ({
  type: ADD_NEW_COMMENT,
  payload: { data },
});

//Sagas
function* fetchGetPreview() {
  try {
    const previewImages: Array<RecievePreviewTypes> = yield call(fetchPreview);
    yield put(recievePreview(previewImages));
  } catch (e) {
      yield console.log(e);
    }
}

function* fetchFullImage(action: { payload: number; }) {
  try {
    const fullImage: recieveFullImgTypes = yield call(fetchImage, action.payload);
    yield put(recieveFullImg(fullImage));
  } catch (e) {
      yield console.log(e);
    }
}

function* settingFalse() {
  try {
    yield put(settingLoadingFalse(false));
  } catch (e) {
      yield console.log(e);
    }
}

function* sendingComment(action: { payload: { date: any; comment: any; text: any; name: any; id: any }; }) {
  let comment = {
    id: Math.floor(Math.random() * 1000),
    date: action.payload.date,
    comment: action.payload.comment,
  };
  try {
    yield call(postComment, action.payload);
    yield put(addNewComment(comment));
  } catch (e) {
      yield console.log(e);
    }
}

export function* saga() {
  yield all([
    takeEvery(GET_PREVIEW, fetchGetPreview),
    takeEvery(GET_FULL_IMAGE, fetchFullImage),
    takeEvery(SET_LOADED_FALSE, settingFalse),
    takeEvery(SEND_COMMENT, sendingComment),
  ]);
}
