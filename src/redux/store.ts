import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { watersReducer } from "./reducers/waters";
import {fishMansReducer} from "./reducers/fishMans";

import { watersWatcher } from "./sagas/watersSaga";
import {fishMansWatcher} from "./sagas/fishMansSaga"


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({ waters: watersReducer, fishMans:fishMansReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watersWatcher);
sagaMiddleware.run(fishMansWatcher);
