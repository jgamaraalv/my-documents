import { Action } from "redux";

import { ToastMessage } from "./types";

export const ADD_TOAST = Symbol("OPEN_DIALOG");
export const REMOVE_TOAST = Symbol("REMOVE_TOAST");

export interface AddToastAction extends Action<typeof ADD_TOAST> {
  payload: { message: Omit<ToastMessage, "id"> };
}

export const addToast = (message: AddToastAction["payload"]["message"]): AddToastAction => ({
  payload: { message },
  type: ADD_TOAST,
});

export interface RemoveToastAction extends Action<typeof REMOVE_TOAST> {
  payload: { id: string };
}

export const removeToast = (id: RemoveToastAction["payload"]["id"]): RemoveToastAction => ({
  payload: { id },
  type: REMOVE_TOAST,
});