import { recievePreview, recieveFullImg } from './actions'
import {fetchAPI} from '../api'
import { takeEvery, call, put, all } from 'redux-saga/effects';
import { GET_PREVIEW, GET_FULL_IMAGE, SET_LOADED_FALSE } from './actionTypes'




function* fetchGetPreview() {
  try {
    const previewImages = yield call(fetchAPI);
    yield put(recievePreview(previewImages)) 

  } catch(e) {
    yield console.log(e)
    }
}

function* fetchFullImage(action) {
  try {
    const fullImage = yield call(fetchAPI, action.payload);
    yield put(recieveFullImg(fullImage)) 

  } catch(e) {
    yield console.log(e)
    }
}

function* settingFalse(action) {
  try {
    yield put(recieveFullImg(false))

  } catch(e) {
    yield console.log(e)
    }
}



export function* saga() {
  yield all([
    takeEvery(GET_PREVIEW, fetchGetPreview),
    takeEvery(GET_FULL_IMAGE, fetchFullImage),
    takeEvery(SET_LOADED_FALSE, settingFalse)]) 
}
