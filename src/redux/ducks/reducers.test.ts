import reducer, {
  addNewComment,
  recieveFullImg,
  settingLoadingFalse,
} from './gallery';
import {
  mockCommentPost,
  mockedStore,
  mockFullImage,
} from '../../__mocks__/fileMock';

const store = { ...mockedStore };

describe('reducers', () => {
  it('settingLoadingFalse', () => {
    const state = reducer(store, settingLoadingFalse(true));
    expect(state).toStrictEqual(store);
  });

  it('should set fullImage to store', () => {
    const state = reducer(store, recieveFullImg(mockFullImage));
    const expectedState = {
      ...store,
      fullImage: mockFullImage,
      isLoaded: true,
    };
    expect(state).toStrictEqual(expectedState);
  });

  it('should set fullImage to store', () => {
    const state = reducer(store, addNewComment(mockCommentPost));
    const expectedState = {
      ...store,
      fullImage: {
        ...store.fullImage,
        comments: [...store.fullImage.comments, mockCommentPost],
      },
    };
    expect(state).toStrictEqual(expectedState);
  });
});
