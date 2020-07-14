import { Reducer } from "redux";
import { uuid } from 'uuidv4';

import { ADD_TOAST, REMOVE_TOAST } from "./actions";
import { ToastState } from "./types";

const getInitialState = (): ToastState => ({
  messages: [],
});

const toastReducer: Reducer<ToastState> = (state = getInitialState(), action) => {
  switch (action.type) {
    case REMOVE_TOAST:
      return { ...state, messages: state.messages.filter(message => message.id !== action.payload.id) };

    case ADD_TOAST:
      return {
        ...state,
        messages: [...state.messages, { id: uuid(), ...action.payload.message }],
      };

    default:
      return state;
  }
};

export default toastReducer;