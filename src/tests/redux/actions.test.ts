import {
  mockComment,
  mockFullImage,
  mockPreviewTypes,
} from '../__mocks__/fileMock';
import {
  recievePreview,
  recieveFullImg,
  settingLoadingFalse,
  addNewComment,
  GetFullImageAction,
  SendCommentAction,
} from '../../redux/ducks/gallery';

describe('actions', () => {
  it('should return array of preview images', () => {
    expect(recievePreview(mockPreviewTypes)).toStrictEqual({
      type: 'RECIEVE_PREVIEW',
      payload: {
        data: mockPreviewTypes,
      },
    });
  });

  it('should return full image with comments', () => {
    expect(recieveFullImg(mockFullImage)).toStrictEqual({
      type: 'RECIEVE_FULL_IMAGE',
      payload: {
        data: mockFullImage,
      },
    });
  });

  it('should return isLoaded: false', () => {
    expect(settingLoadingFalse(true)).toStrictEqual({
      type: 'SET_LOADED_FALSE',
      payload: {
        data: true,
      },
    });
  });

  it('should return comment', () => {
    expect(addNewComment(mockComment)).toStrictEqual({
      type: 'ADD_NEW_COMMENT',
      payload: {
        data: mockComment,
      },
    });
  });

  it('should return full image', () => {
    expect(GetFullImageAction(123)).toStrictEqual({
      type: 'GET_FULL_IMAGE',
      payload: {
        data: 123,
      },
    });
  });

  it('should send comment', () => {
    expect(SendCommentAction(mockComment)).toStrictEqual({
      type: 'SEND_COMMENT',
      payload: {
        data: mockComment,
      },
    });
  });
});
