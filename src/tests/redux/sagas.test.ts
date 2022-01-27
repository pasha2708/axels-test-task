import { runSaga } from '@redux-saga/core';
import * as api from '../../api';
import {
  mockFullImage237,
  mockPreviewTypes,
} from '../../tests/__mocks__/fileMock';
import {
  fetchFullImage,
  fetchGetPreview,
  GetFullImageAction,
  recieveFullImg,
  recievePreview,
} from '../../redux/ducks/gallery';

afterEach(() => jest.resetAllMocks());

describe('sagas', () => {
  describe('saga fetchGetPreview', () => {
    it('should return array of preview', async () => {
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

  describe('saga fetchFullImage', () => {
    it('should return array full image with comments', async () => {
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
});
