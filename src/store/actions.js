import * as actions from './actionTypes';


export const recievePreview = (data) => ({
  type: actions.RECIEVE_PREVIEW,
  payload: { data }
});

export const recieveFullImg = (data) => ({
  type: actions.RECIEVE_FULL_IMAGE,
  payload: { data }
});

export const settingLoadingFalse = (data) => ({
  type: actions.SETTING_LOADING_FALSE,
  payload: { data }
});
