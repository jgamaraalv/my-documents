import { all, put, select, takeLatest } from "redux-saga/effects";
import { format } from "date-fns";

import Contract from "../../../types/Contract";
import { editData, fetchData, fetchSingleData, getContractsWithData, removeData, submitData } from "../../../fetchers/contracts";
import { submitData as submitFile } from "../../../fetchers/files";
import { 
  EDIT_CONTRACT, EDIT_CONTRACT_SUCCESS, EditContract, editContractError, editContractSuccess, 
  FETCH_CONTRACT, fetchContractError, fetchContractSuccess, FetchContract,
  FETCH_CONTRACTS, FETCH_CONTRACTS_SUCCESS, fetchContractsError, fetchContractsSuccess, FetchContractsAction,
  fetchContractsData, fetchContractsDataError, fetchContractsDataSuccess,
  REMOVE_CONTRACTS, REMOVE_CONTRACTS_SUCCESS, removeContractsError, RemoveContracts, removeContractsSuccess, 
  SUBMIT_CONTRACTS, SUBMIT_CONTRACTS_SUCCESS, SubmitContracts, submitContractsError, submitContractsSuccess, 
} from "./actions";
import { addToast } from "../../toast/actions";
import { closeDialog } from "../../dialog/actions";
import ApplicationState from "../../State";

export function* editContract({ payload }: EditContract) {
  try { 
    yield editData(payload.data);

    yield put(editContractSuccess());

    yield put(addToast({ type: "success", title: "Sucesso", description: "O contrato foi editado com sucesso" }));
  } catch (e) {
    yield put(editContractError(e));

    yield put(addToast({ type: "error", title: "Falha", description: "Algo de errado aconteceu na edição do contrato" }));
  } finally {
    yield put(closeDialog());
  }
}

export function* fetchContract({ payload }: FetchContract) {
  try {
    const data = yield fetchSingleData(payload.id);

    yield put(fetchContractSuccess(data));
  } catch (e) {
    yield put(fetchContractError(e));
  }
}

export function* fetchContracts({ payload }: FetchContractsAction) {
  try {
    const title = payload ? payload.title : '';
    const data = yield fetchData(title);

    const formattedData = data.map((item: Contract) => ({
      ...item,
      startDate: format(new Date(item.startDate), "dd/MM/yyyy"),
      endDate: format(new Date(item.endDate), "dd/MM/yyyy"),
    }));

    yield put(fetchContractsSuccess(formattedData));
  } catch (e) {
    yield put(fetchContractsError(e));
  }
}

export function* removeContracts({ payload }: RemoveContracts) {
  try {
    // Call the function to remove the contract file. I don't have it. 🥺

    yield removeData(payload.id);

    yield put(removeContractsSuccess());

    yield put(addToast({ type: "success", title: "Sucesso", description: "O contrato foi deletado com sucesso" }));
  } catch (e) {
    yield put(removeContractsError(e));

    yield put(addToast({ type: "error", title: "Falha", description: "Algo de errado aconteceu na exclusão do contrato" }));
  } finally {
    yield put(closeDialog());
  }
}

export function* submitContracts({ payload }: SubmitContracts) {
  try {
    const { file, ...data } = payload.data;
    const { path } = yield submitFile(file[0]);

    if (!path) {
      throw new Error('Não foi possível obter o caminho do arquivo');
    }
    
    yield submitData({ ...data, file: path });

    yield put(submitContractsSuccess());

    yield put(addToast({ type: "success", title: "Sucesso", description: "O contrato foi adicionado com sucesso" }));
  } catch (e) {
    yield put(submitContractsError(e));

    yield put(addToast({ type: "error", title: "Falha", description: "Algo de errado aconteceu na adição do contrato" }));
  } finally {
    yield put(closeDialog());
  }
}

export function* onFetchContractsSuccess() {
  yield put(fetchContractsData());

  const state: ApplicationState = yield select();
  const contracts = state.modules.contracts.contracts.results;

  try {
    if (!contracts) {
      return;
    }

    const contractsWithData = yield getContractsWithData(contracts);
    yield put(fetchContractsDataSuccess(contractsWithData));
  } catch (e) {
    yield put(fetchContractsDataError(e));
  }
}

export default function* saga() {
  yield all([
    takeLatest(EDIT_CONTRACT, editContract),
    takeLatest(EDIT_CONTRACT_SUCCESS, fetchContracts),
    takeLatest(FETCH_CONTRACT, fetchContract),
    takeLatest(FETCH_CONTRACTS, fetchContracts),
    takeLatest(FETCH_CONTRACTS_SUCCESS, onFetchContractsSuccess),
    takeLatest(REMOVE_CONTRACTS, removeContracts),
    takeLatest(SUBMIT_CONTRACTS, submitContracts),
    takeLatest(REMOVE_CONTRACTS_SUCCESS, fetchContracts),
    takeLatest(SUBMIT_CONTRACTS_SUCCESS, fetchContracts),
  ])
}