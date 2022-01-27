import { BasicStateType, CommentTypes, recieveFullImgTypes, RecievePreviewTypes } from '../redux/ducks/gallery';

export const mockStoreWithData = {
  data: {
    images: [],
    fullImage:{
      id: 123,
      url: 'url',
      comments: [{
        id: 321,
        date: 1529500027127,
        text: 'nice photo'
      },
      {
        id: 123,
        date: 1529500027128,
        text: 'nice photo2'
      }]
    },
    isLoaded: true,
  },
  id: 123
}

export const mockedStore: BasicStateType = {
  images: [],
  fullImage: {
    id: 123,
    url: 'url',
    comments: [],
  },
  isLoaded: false,
};

export const mockApiForGallery = {
  images: [
    {
      id: 123,
      url: 'fakeURL/',
    },
    {
      id: 321,
      url: 'fakeURL2/',
    },
  ],
};

export const mockFullImage237: recieveFullImgTypes = {
  id: 237,
  url: 'https://picsum.photos/id/237/600/400',
  comments: [{ id: 153, text: 'Крутая фотка', date: 1578054737927 }],
};

export const mockCommentPost: CommentTypes = {
  id: 237,
  date: 1578054737927,
  comment: 'commentcomment',
  name: 'Pasha'
};

export const mockPreviewTypes: Array<RecievePreviewTypes> = [
  { id: 237, url: 'https://picsum.photos/id/237/300/200' },
  { id: 238, url: 'https://picsum.photos/id/238/300/200' },
  { id: 239, url: 'https://picsum.photos/id/239/300/200' },
  { id: 240, url: 'https://picsum.photos/id/240/300/200' },
  { id: 241, url: 'https://picsum.photos/id/241/300/200' },
  { id: 242, url: 'https://picsum.photos/id/242/300/200' },
];

export const mockFullImage: recieveFullImgTypes = {
  id: 123,
  url: 'url/',
  comments: [],
};

export const mockComment: CommentTypes = {
  id: 123,
  date: 123456,
  text: 'comment',
};
