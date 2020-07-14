import { combineReducers } from "redux";

import dialogReducer from "./dialog/reducer";
import toastReducer from "./toast/reducer";
import contractsReducer from "./modules/contracts/reducer";
import customersReducer from "./modules/customers/reducer";
import ApplicationState from "./State";

const rootReducer = combineReducers<ApplicationState>({
  dialog: dialogReducer,
  toast: toastReducer,
  modules: combineReducers({
    contracts: contractsReducer,
    customers: customersReducer,
  }),
});

export default rootReducer;