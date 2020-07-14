import { ModulesState } from "./modules";
import { DialogState } from "./dialog/types";
import { ToastState } from "./toast/types";

export default interface ApplicationState {
  dialog: DialogState;
  toast: ToastState;
  modules: ModulesState;
}