import * as actions from './actionTypes';

const basicState = {
  images: [],
  fullImage: {
    id: null,
    url: null,
    comments: []
  },
  isLoaded: false,
};


export default function reducer(state = basicState, action) {
 
  switch (action.type) {
    case actions.RECIEVE_PREVIEW:
      const images = action.payload.data;
      return {...state, images};

      case actions.RECIEVE_FULL_IMAGE:
      const fullImage = action.payload.data;
      return {...state, fullImage, isLoaded: true};

      case actions.SETTING_LOADING_FALSE:
        return {...state, isLoaded: true};

    default:
      return state;
  }
}

