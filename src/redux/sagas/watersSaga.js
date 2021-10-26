import { takeEvery, call, put } from "redux-saga/effects";

import { getWaters } from "../../services/waters";
import { ACTIONS } from "../constants";

function* getWatersSaga() {
  try {
    const waters = yield call(() => getWaters());
    yield put({ type: ACTIONS.GET_WATERS_SUCCESS, waters: waters });
  } catch {}
}

export function* watersWatcher() {
  yield takeEvery(ACTIONS.GET_WATERS, getWatersSaga);
}
