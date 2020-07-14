import { Reducer } from "redux";

import { CLOSE_DIALOG, OPEN_DIALOG, OpenDialogAction } from "./actions";
import { DialogState } from "./types";

const getInitialState = (): DialogState => ({
  component: null,
  open: false,
});

const dialogReducer: Reducer<DialogState> = (state = getInitialState(), action) => {
  switch (action.type) {
    case CLOSE_DIALOG:
      return { ...state, component: null, open: false, urlParams: null };

    case OPEN_DIALOG:
      return {
        ...state,
        ...(action.payload as OpenDialogAction["payload"]),
        open: true,
      };

    default:
      return state;
  }
};

export default dialogReducer;