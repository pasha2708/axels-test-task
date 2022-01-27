import reducer, {
  addNewComment,
  recieveFullImg,
  settingLoadingFalse,
} from '../../redux/ducks/gallery';
import {
  mockCommentPost,
  mockedStore,
  mockFullImage,
} from '../../tests/__mocks__/fileMock';

const store = { ...mockedStore };

describe('reducers', () => {
  it('should return isLoaded: false', () => {
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

  it('should set comment to store', () => {
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
