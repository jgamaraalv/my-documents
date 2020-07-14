import { all } from "redux-saga/effects";

import contractsSaga from "./modules/contracts/sagas";
import customersSaga from "./modules/customers/sagas";

export default function* rootSaga() {
  yield all([
    contractsSaga(),
    customersSaga(),
  ]);
}