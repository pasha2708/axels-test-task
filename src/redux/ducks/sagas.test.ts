import { runSaga } from '@redux-saga/core';
import * as api from '../../api/api';
import { mockPreviewTypes } from './actions.test';
import {
  fetchFullImage,
  fetchGetPreview,
  GetFullImageAction,
  recieveFullImg,
  recievePreview,
  SendCommentAction,
  sendingComment,
  settingLoadingFalse,
} from './gallery';
import { mockCommentPost, mockFullImage237 } from './reducers.test';

afterEach(() => jest.resetAllMocks());

describe('sagas', () => {
  describe('fetchGetPreview()', () => {
    it('should return array pf previews', async () => {
      const requestImages = jest
        .spyOn(api, 'fetchPreview')
        .mockImplementation(() => Promise.resolve(mockPreviewTypes));
      const dispatched: [] = [];
      await runSaga(
        {
          dispatch: (action: never) => dispatched.push(action),
        },
        fetchGetPreview
      );
      expect(requestImages).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([recievePreview(mockPreviewTypes)]);
    });
  });

  describe('fetchFullImage()', () => {
    it('should return array full image with comments?', async () => {
      const requestImage = jest
        .spyOn(api, 'fetchImage')
        .mockImplementation(() => Promise.resolve(mockFullImage237));
      const dispatched: [] = [];
      await runSaga(
        {
          dispatch: (action: never) => dispatched.push(action),
        },
        fetchFullImage,
        GetFullImageAction(237)
      );
      expect(requestImage).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([recieveFullImg(mockFullImage237)]);
    });
  });

  describe('sendingComment()', () => {
    it('sending comment', async () => {
      const requestImage = jest
        .spyOn(api, 'postComment')
        .mockImplementation(() => Promise.resolve(204));
      const dispatched: [] = [];
      await runSaga(
        {
          dispatch: (action: never) => dispatched.push(action),
        },
        sendingComment,
        SendCommentAction(mockCommentPost)
      );
      expect(requestImage).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual(204);
    });
  });
});
