import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { watersReducer } from "./reducers/waters";
import { IPostsState, postsReducer } from "./reducers/posts";
import { watersWatcher } from "./sagas/watersSaga";

export interface IState {
  posts: IPostsState;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({ posts: postsReducer, waters: watersReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watersWatcher);
