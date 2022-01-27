import {
  mockComment,
  mockFullImage,
  mockPreviewTypes,
} from '../../__mocks__/fileMock';
import {
  recievePreview,
  recieveFullImg,
  settingLoadingFalse,
  addNewComment,
  GetFullImageAction,
  SendCommentAction,
} from './gallery';

describe('actions', () => {
  it('action recievePreview', () => {
    expect(recievePreview(mockPreviewTypes)).toStrictEqual({
      type: 'RECIEVE_PREVIEW',
      payload: {
        data: mockPreviewTypes,
      },
    });
  });

  it('action recieveFullImg', () => {
    expect(recieveFullImg(mockFullImage)).toStrictEqual({
      type: 'RECIEVE_FULL_IMAGE',
      payload: {
        data: mockFullImage,
      },
    });
  });

  it('action settingLoadingFalse', () => {
    expect(settingLoadingFalse(true)).toStrictEqual({
      type: 'SET_LOADED_FALSE',
      payload: {
        data: true,
      },
    });
  });

  it('action addNewComment', () => {
    expect(addNewComment(mockComment)).toStrictEqual({
      type: 'ADD_NEW_COMMENT',
      payload: {
        data: mockComment,
      },
    });
  });

  it('action GetFullImageAction', () => {
    expect(GetFullImageAction(123)).toStrictEqual({
      type: 'GET_FULL_IMAGE',
      payload: {
        data: 123,
      },
    });
  });

  it('action SendCommentAction', () => {
    expect(SendCommentAction(mockComment)).toStrictEqual({
      type: 'SEND_COMMENT',
      payload: {
        data: mockComment,
      },
    });
  });
});
