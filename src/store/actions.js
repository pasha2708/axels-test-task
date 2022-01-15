import * as actions from './actionTypes';


export const getPreview = () => ({
  type: actions.GET_PREVIEW,
});
export const getFullImage = id => ({
  type: actions.GET_FULL_IMAGE,
  payload: { id }
});
export const getComments = id => ({
  type: actions.GET_COMMENTS,
  payload: { id }
})
