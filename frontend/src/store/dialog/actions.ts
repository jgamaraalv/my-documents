import { Action } from "redux";

import { DialogState } from "./types";

export const CLOSE_DIALOG = Symbol("CLOSE_DIALOG");
export const OPEN_DIALOG = Symbol("OPEN_DIALOG");

export const closeDialog = (): Action<typeof CLOSE_DIALOG> => ({ type: CLOSE_DIALOG });

export interface OpenDialogAction extends Action<typeof OPEN_DIALOG> {
  payload: { component: NonNullable<DialogState["component"]> };
}

export const openDialog = (
  component: OpenDialogAction["payload"]["component"],
): OpenDialogAction => ({
  payload: { component },
  type: OPEN_DIALOG,
});