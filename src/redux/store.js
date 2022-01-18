import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { saga } from './ducks/gallery'
import reducer from "./ducks/gallery";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)

export default store;
