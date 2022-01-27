import {
  recievePreview,
  recieveFullImg,
  settingLoadingFalse,
  addNewComment,
  GetFullImageAction,
  SendCommentAction,
} from './gallery';

export const mockPreviewTypes = [
  { id: 237, url: 'https://picsum.photos/id/237/300/200' },
  { id: 238, url: 'https://picsum.photos/id/238/300/200' },
  { id: 239, url: 'https://picsum.photos/id/239/300/200' },
  { id: 240, url: 'https://picsum.photos/id/240/300/200' },
  { id: 241, url: 'https://picsum.photos/id/241/300/200' },
  { id: 242, url: 'https://picsum.photos/id/242/300/200' },
];

export const mockFullImage = {
  id: 123,
  url: 'url/',
  comments: [],
};

export const mockComment = {
  id: 123,
  date: 123456,
  text: 'comment',
};

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
