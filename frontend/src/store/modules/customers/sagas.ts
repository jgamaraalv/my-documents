import { all, put, takeLatest } from "redux-saga/effects";

import { editData, fetchData, fetchSingleData, removeData, submitData } from "../../../fetchers/customers";
import { 
  EDIT_CUSTOMER, EDIT_CUSTOMER_SUCCESS, EditCustomer, editCustomerError, editCustomerSuccess, 
  FETCH_CUSTOMER, fetchCustomerError, fetchCustomerSuccess, FetchCustomer,
  FETCH_CUSTOMERS, fetchCustomersError, fetchCustomersSuccess, FetchCustomersAction,
  REMOVE_CUSTOMERS, REMOVE_CUSTOMERS_SUCCESS, removeCustomersError, RemoveCustomers, removeCustomersSuccess, 
  SUBMIT_CUSTOMERS, SUBMIT_CUSTOMERS_SUCCESS, SubmitCustomers, submitCustomersError, submitCustomersSuccess, 
} from "./actions";
import { addToast } from "../../toast/actions";
import { closeDialog } from "../../dialog/actions";

export function* editCustomer({ payload }: EditCustomer) {
  try { 
    yield editData(payload.data);

    yield put(editCustomerSuccess());

    yield put(addToast({ type: "success", title: "Sucesso", description: "O cliente foi editado com sucesso" }));
  } catch (e) {
    yield put(editCustomerError(e));

    yield put(addToast({ type: "error", title: "Falha", description: "Algo de errado aconteceu na edição do cliente" }));
  } finally {
    yield put(closeDialog());
  }
}

export function* fetchCustomer({ payload }: FetchCustomer) {
  try {
    const data = yield fetchSingleData(payload.id);

    yield put(fetchCustomerSuccess(data));
  } catch (e) {
    yield put(fetchCustomerError(e));
  }
}

export function* fetchCustomers({ payload }: FetchCustomersAction) {
  try {
    const name = payload ? payload.name : '';
    const data = yield fetchData(name);

    yield put(fetchCustomersSuccess(data));
  } catch (e) {
    console.log(e)
    yield put(fetchCustomersError(e));
  }
}

export function* removeCustomers({ payload }: RemoveCustomers) {
  try {
    yield removeData(payload.id);

    yield put(removeCustomersSuccess());

    yield put(addToast({ type: "success", title: "Sucesso", description: "O cliente foi deletado com sucesso" }));
  } catch (e) {
    yield put(removeCustomersError(e));

    yield put(addToast({ type: "error", title: "Falha", description: "Algo de errado aconteceu na exclusão do cliente" }));
  } finally {
    yield put(closeDialog());
  }
}

export function* submitCustomers({ payload }: SubmitCustomers) {
  try { 
    yield submitData(payload.data);

    yield put(submitCustomersSuccess());

    yield put(addToast({ type: "success", title: "Sucesso", description: "O cliente foi adicionado com sucesso" }));
  } catch (e) {
    yield put(submitCustomersError(e));

    yield put(addToast({ type: "error", title: "Falha", description: "Algo de errado aconteceu na adição do cliente" }));
  } finally {
    yield put(closeDialog());
  }
}

export default function* saga() {
  yield all([
    takeLatest(EDIT_CUSTOMER, editCustomer),
    takeLatest(EDIT_CUSTOMER_SUCCESS, fetchCustomers),
    takeLatest(FETCH_CUSTOMER, fetchCustomer),
    takeLatest(FETCH_CUSTOMERS, fetchCustomers),
    takeLatest(REMOVE_CUSTOMERS, removeCustomers),
    takeLatest(SUBMIT_CUSTOMERS, submitCustomers),
    takeLatest(REMOVE_CUSTOMERS_SUCCESS, fetchCustomers),
    takeLatest(SUBMIT_CUSTOMERS_SUCCESS, fetchCustomers),
  ])
}