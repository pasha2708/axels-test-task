import * as actions from './actionTypes';
import backend from './demo_backend.json'

console.log(backend);
export default function reducer(state = [], action) {
  if (!state) {
    return state
  }
  switch (action.type) {
    case actions.GET_PREVIEW:
      return [...state, ...backend];
    default:
      return state;
  }
}

