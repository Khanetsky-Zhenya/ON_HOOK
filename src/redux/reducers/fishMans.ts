import { AnyAction } from "redux";

import { ACTIONS } from "../constants";

export type IFishMansState = [];

const defaultState: IFishMansState = [];

export const fishMansReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.GET_FISHMANS_SUCCESS: {
      return action.fishMans;
    }
    default:
      return state;
  }
};
