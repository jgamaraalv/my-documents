import { Action } from "redux";

import Contract from "../../../types/Contract";
import ContractsModuleState from "./types";

export const EDIT_CONTRACT = Symbol("EDIT_CONTRACT");
export const EDIT_CONTRACT_ERROR = Symbol("EDIT_CONTRACT_ERROR");
export const EDIT_CONTRACT_SUCCESS = Symbol("EDIT_CONTRACT_SUCCESS");

export const FETCH_CONTRACT = Symbol("FETCH_CONTRACT");
export const FETCH_CONTRACT_ERROR = Symbol("FETCH_CONTRACT_ERROR");
export const FETCH_CONTRACT_SUCCESS = Symbol("FETCH_CONTRACT_SUCCESS");
export const RESET_CONTRACT_STATE = Symbol("RESET_CONTRACT_SUCCESS");

export const FETCH_CONTRACTS = Symbol("FETCH_CONTRACTS");
export const FETCH_CONTRACTS_ERROR = Symbol("FETCH_CONTRACTS_ERROR");
export const FETCH_CONTRACTS_SUCCESS = Symbol("FETCH_CONTRACTS_SUCCESS");

export const FETCH_CONTRACTS_DATA = Symbol("FETCH_CONTRACTS_DATA");
export const FETCH_CONTRACTS_DATA_ERROR = Symbol("FETCH_CONTRACTS_DATA_ERROR");
export const FETCH_CONTRACTS_DATA_SUCCESS = Symbol("FETCH_CONTRACTS_DATA_SUCCESS");

export const REMOVE_CONTRACTS = Symbol("REMOVE_CONTRACTS");
export const REMOVE_CONTRACTS_ERROR = Symbol("REMOVE_CONTRACTS_ERROR");
export const REMOVE_CONTRACTS_SUCCESS = Symbol("REMOVE_CONTRACTS_SUCCESS");

export const SUBMIT_CONTRACTS = Symbol("SUBMIT_CONTRACTS");
export const SUBMIT_CONTRACTS_ERROR = Symbol("SUBMIT_CONTRACTS_ERROR");
export const SUBMIT_CONTRACTS_SUCCESS = Symbol("SUBMIT_CONTRACTS_SUCCESS");

// EDIT CONTRACT ACTIONS //
export interface EditContract extends Action<typeof EDIT_CONTRACT> {
  payload: { data: Contract; }
}

export function editContract(data: EditContract["payload"]["data"]): EditContract {
  return { type: EDIT_CONTRACT, payload: { data } };
}

export interface EditContractErrorAction extends Action<typeof EDIT_CONTRACT_ERROR> {
  payload: { error: Error; };
}

export function editContractError(error: EditContractErrorAction["payload"]["error"]): EditContractErrorAction {
  return { type: EDIT_CONTRACT_ERROR, payload: { error } };
}

export function editContractSuccess(): Action<typeof EDIT_CONTRACT_SUCCESS> {
  return { type: EDIT_CONTRACT_SUCCESS };
}

// FETCH CONTRACT ACTIONS //
export interface FetchContract extends Action<typeof FETCH_CONTRACT> {
  payload: { id: number; }
}

export function fetchContract(id: FetchContract["payload"]["id"]): FetchContract {
  return { type: FETCH_CONTRACT, payload: { id } };
}

export interface FetchContractErrorAction extends Action<typeof FETCH_CONTRACT_ERROR> {
  payload: { error: Error; };
}

export function fetchContractError(error: FetchContractErrorAction["payload"]["error"]): FetchContractErrorAction {
  return { type: FETCH_CONTRACT_ERROR, payload: { error } };
}

export interface FetchContractSuccessAction extends Action<typeof FETCH_CONTRACT_SUCCESS> {
  payload: { contract: Contract };
}

export function fetchContractSuccess(contract: FetchContractSuccessAction["payload"]["contract"]): FetchContractSuccessAction {
  return { type: FETCH_CONTRACT_SUCCESS, payload: { contract } };
}

export function resetContractState(): Action<typeof RESET_CONTRACT_STATE> {
  return { type: RESET_CONTRACT_STATE };
}

// FETCH CONTRACTS ACTIONS //
export interface FetchContractsAction extends Action<typeof FETCH_CONTRACTS> {
  payload: { title: string; };
}

export function fetchContracts(title?: FetchContractsAction["payload"]["title"]): FetchContractsAction {
  return { type: FETCH_CONTRACTS, payload: { title: title || '' } };
}

export interface FetchContractsErrorAction extends Action<typeof FETCH_CONTRACTS_ERROR> {
  payload: { error: Error; };
}

export function fetchContractsError(error: FetchContractsErrorAction["payload"]["error"]): FetchContractsErrorAction {
  return { type: FETCH_CONTRACTS_ERROR, payload: { error } };
}

export interface FetchContractsSuccessAction extends Action<typeof FETCH_CONTRACTS_SUCCESS> {
  payload: { contracts: NonNullable<ContractsModuleState["contracts"]> };
}

export function fetchContractsSuccess(contracts: FetchContractsSuccessAction["payload"]["contracts"]): FetchContractsSuccessAction {
  return { type: FETCH_CONTRACTS_SUCCESS, payload: { contracts } };
}

// FETCH CONTRACTS DATA ACTIONS //
export function fetchContractsData(): Action<typeof FETCH_CONTRACTS_DATA> {
  return { type: FETCH_CONTRACTS_DATA };
}

export interface FetchContractsDataErrorAction extends Action<typeof FETCH_CONTRACTS_DATA_ERROR> {
  payload: { error: Error; };
}

export function fetchContractsDataError(error: FetchContractsDataErrorAction["payload"]["error"]): FetchContractsDataErrorAction {
  return { type: FETCH_CONTRACTS_DATA_ERROR, payload: { error } };
}

export interface FetchContractsDataSuccessAction extends Action<typeof FETCH_CONTRACTS_DATA_SUCCESS> {
  payload: { contracts: NonNullable<ContractsModuleState["contracts"]> };
}

export function fetchContractsDataSuccess(contracts: FetchContractsDataSuccessAction["payload"]["contracts"]): FetchContractsDataSuccessAction {
  return { type: FETCH_CONTRACTS_DATA_SUCCESS, payload: { contracts } };
}

// REMOVE CONTRACTS ACTIONS //
export interface RemoveContracts extends Action<typeof REMOVE_CONTRACTS> {
  payload: { id: number; }
}

export function removeContracts(id: RemoveContracts["payload"]["id"]): RemoveContracts {
  return { type: REMOVE_CONTRACTS, payload: { id } };
}

export interface RemoveContractsErrorAction extends Action<typeof REMOVE_CONTRACTS_ERROR> {
  payload: { error: Error; };
}

export function removeContractsError(error: RemoveContractsErrorAction["payload"]["error"]): RemoveContractsErrorAction {
  return { type: REMOVE_CONTRACTS_ERROR, payload: { error } };
}

export function removeContractsSuccess(): Action<typeof REMOVE_CONTRACTS_SUCCESS> {
  return { type: REMOVE_CONTRACTS_SUCCESS };
}

// SUBMIT CONTRACTS ACTIONS //
export interface SubmitContracts extends Action<typeof SUBMIT_CONTRACTS> {
  payload: { data: Omit<Contract, "id">; }
}

export function submitContracts(data: SubmitContracts["payload"]["data"]): SubmitContracts {
  return { type: SUBMIT_CONTRACTS, payload: { data } };
}

export interface SubmitContractsErrorAction extends Action<typeof SUBMIT_CONTRACTS_ERROR> {
  payload: { error: Error; };
}

export function submitContractsError(error: SubmitContractsErrorAction["payload"]["error"]): SubmitContractsErrorAction {
  return { type: SUBMIT_CONTRACTS_ERROR, payload: { error } };
}

export function submitContractsSuccess(): Action<typeof SUBMIT_CONTRACTS_SUCCESS> {
  return { type: SUBMIT_CONTRACTS_SUCCESS };
}