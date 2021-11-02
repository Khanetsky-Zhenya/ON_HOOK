import { takeEvery, call, put } from "redux-saga/effects";

import { getFishMans } from "../../services/fishMans"

import { ACTIONS } from "../constants";

function* getFishMansSaga() {
  try {
    const fishMans = yield call(() => getFishMans());
    yield put({ type: ACTIONS.GET_FISHMANS_SUCCESS, fishMans: fishMans });
  } catch {}
}

export function* fishMansWatcher() {
  yield takeEvery(ACTIONS.GET_FISHMANS, getFishMansSaga);
}
