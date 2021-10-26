import { AnyAction } from "redux";

import { ACTIONS } from "../constants";

export type IWatersState = [];

const defaultState: IWatersState = [];

export const watersReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.GET_WATERS_SUCCESS: {
      return action.waters;
    }
    default:
      return state;
  }
};
