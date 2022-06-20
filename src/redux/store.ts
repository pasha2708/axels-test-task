import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import saga from "./saga";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>; //TODO
export type AppDispatch = typeof store.dispatch; //TODO

sagaMiddleware.run(saga);
