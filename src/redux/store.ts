import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { watersReducer } from "./reducers/waters";
import {fishMansReducer} from "./reducers/fishMans"

import { IPostsState, postsReducer } from "./reducers/posts";

import { watersWatcher } from "./sagas/watersSaga";
import {fishMansWatcher} from "./sagas/fishMansSaga"

export interface IState {
  posts: IPostsState;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({ posts: postsReducer, waters: watersReducer, fishMans:fishMansReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watersWatcher);
sagaMiddleware.run(fishMansWatcher);
