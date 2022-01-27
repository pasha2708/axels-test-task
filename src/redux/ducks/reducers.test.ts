import reducer, {
  addNewComment,
  BasicStateType,
  recieveFullImg,
  settingLoadingFalse,
} from './gallery';
import recievePreview from './gallery';
import { mockFullImage } from './actions.test';

const mockedStore = {
  images: [],
  fullImage: {
    id: 123,
    url: 'url',
    comments: [],
  },
  isLoaded: false,
};

export const mockFullImage237 = {
  id: 237,
  url: 'https://picsum.photos/id/237/600/400',
  comments: [{ id: 153, text: 'Крутая фотка', date: 1578054737927 }],
};

export const mockCommentPost = {
  id: 237,
  date: 1578054737927,
  comment: 'commentcomment',
  name: 'Pasha'
};

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
