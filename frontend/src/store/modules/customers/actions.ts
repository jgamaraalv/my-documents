import { Action } from "redux";

import Customer from "../../../types/Customer";
import CustomersModuleState from "./types";

export const EDIT_CUSTOMER = Symbol("EDIT_CUSTOMER");
export const EDIT_CUSTOMER_ERROR = Symbol("EDIT_CUSTOMER_ERROR");
export const EDIT_CUSTOMER_SUCCESS = Symbol("EDIT_CUSTOMER_SUCCESS");

export const FETCH_CUSTOMER = Symbol("FETCH_CUSTOMER");
export const FETCH_CUSTOMER_ERROR = Symbol("FETCH_CUSTOMER_ERROR");
export const FETCH_CUSTOMER_SUCCESS = Symbol("FETCH_CUSTOMER_SUCCESS");
export const RESET_CUSTOMER_STATE = Symbol("RESET_CUSTOMER_SUCCESS");

export const FETCH_CUSTOMERS = Symbol("FETCH_CUSTOMERS");
export const FETCH_CUSTOMERS_ERROR = Symbol("FETCH_CUSTOMERS_ERROR");
export const FETCH_CUSTOMERS_SUCCESS = Symbol("FETCH_CUSTOMERS_SUCCESS");

export const REMOVE_CUSTOMERS = Symbol("REMOVE_CUSTOMERS");
export const REMOVE_CUSTOMERS_ERROR = Symbol("REMOVE_CUSTOMERS_ERROR");
export const REMOVE_CUSTOMERS_SUCCESS = Symbol("REMOVE_CUSTOMERS_SUCCESS");

export const SUBMIT_CUSTOMERS = Symbol("SUBMIT_CUSTOMERS");
export const SUBMIT_CUSTOMERS_ERROR = Symbol("SUBMIT_CUSTOMERS_ERROR");
export const SUBMIT_CUSTOMERS_SUCCESS = Symbol("SUBMIT_CUSTOMERS_SUCCESS");

// EDIT CUSTOMER ACTIONS //
export interface EditCustomer extends Action<typeof EDIT_CUSTOMER> {
  payload: { data: Customer; }
}

export function editCustomer(data: EditCustomer["payload"]["data"]): EditCustomer {
  return { type: EDIT_CUSTOMER, payload: { data } };
}

export interface EditCustomerErrorAction extends Action<typeof EDIT_CUSTOMER_ERROR> {
  payload: { error: Error; };
}

export function editCustomerError(error: EditCustomerErrorAction["payload"]["error"]): EditCustomerErrorAction {
  return { type: EDIT_CUSTOMER_ERROR, payload: { error } };
}

export function editCustomerSuccess(): Action<typeof EDIT_CUSTOMER_SUCCESS> {
  return { type: EDIT_CUSTOMER_SUCCESS };
}

// FETCH CUSTOMER ACTIONS //
export interface FetchCustomer extends Action<typeof FETCH_CUSTOMER> {
  payload: { id: number; }
}

export function fetchCustomer(id: FetchCustomer["payload"]["id"]): FetchCustomer {
  return { type: FETCH_CUSTOMER, payload: { id } };
}

export interface FetchCustomerErrorAction extends Action<typeof FETCH_CUSTOMER_ERROR> {
  payload: { error: Error; };
}

export function fetchCustomerError(error: FetchCustomerErrorAction["payload"]["error"]): FetchCustomerErrorAction {
  return { type: FETCH_CUSTOMER_ERROR, payload: { error } };
}

export interface FetchCustomerSuccessAction extends Action<typeof FETCH_CUSTOMER_SUCCESS> {
  payload: { customer: Customer };
}

export function fetchCustomerSuccess(customer: FetchCustomerSuccessAction["payload"]["customer"]): FetchCustomerSuccessAction {
  return { type: FETCH_CUSTOMER_SUCCESS, payload: { customer } };
}

export function resetCustomerState(): Action<typeof RESET_CUSTOMER_STATE> {
  return { type: RESET_CUSTOMER_STATE };
}

// FETCH CUSTOMERS ACTIONS //
export interface FetchCustomersAction extends Action<typeof FETCH_CUSTOMERS> {
  payload: { name: string; };
}

export function fetchCustomers(name?: FetchCustomersAction["payload"]["name"]): FetchCustomersAction {
  return { type: FETCH_CUSTOMERS, payload: { name: name || '' } };
}

export interface FetchCustomersErrorAction extends Action<typeof FETCH_CUSTOMERS_ERROR> {
  payload: { error: Error; };
}

export function fetchCustomersError(error: FetchCustomersErrorAction["payload"]["error"]): FetchCustomersErrorAction {
  return { type: FETCH_CUSTOMERS_ERROR, payload: { error } };
}

export interface FetchCustomersSuccessAction extends Action<typeof FETCH_CUSTOMERS_SUCCESS> {
  payload: { customers: NonNullable<CustomersModuleState["customers"]> };
}

export function fetchCustomersSuccess(customers: FetchCustomersSuccessAction["payload"]["customers"]): FetchCustomersSuccessAction {
  return { type: FETCH_CUSTOMERS_SUCCESS, payload: { customers } };
}

// REMOVE CUSTOMERS ACTIONS //
export interface RemoveCustomers extends Action<typeof REMOVE_CUSTOMERS> {
  payload: { id: number; }
}

export function removeCustomers(id: RemoveCustomers["payload"]["id"]): RemoveCustomers {
  return { type: REMOVE_CUSTOMERS, payload: { id } };
}

export interface RemoveCustomersErrorAction extends Action<typeof REMOVE_CUSTOMERS_ERROR> {
  payload: { error: Error; };
}

export function removeCustomersError(error: RemoveCustomersErrorAction["payload"]["error"]): RemoveCustomersErrorAction {
  return { type: REMOVE_CUSTOMERS_ERROR, payload: { error } };
}

export function removeCustomersSuccess(): Action<typeof REMOVE_CUSTOMERS_SUCCESS> {
  return { type: REMOVE_CUSTOMERS_SUCCESS };
}

// SUBMIT CUSTOMERS ACTIONS //
export interface SubmitCustomers extends Action<typeof SUBMIT_CUSTOMERS> {
  payload: { data: Omit<Customer, "id">; }
}

export function submitCustomers(data: SubmitCustomers["payload"]["data"]): SubmitCustomers {
  return { type: SUBMIT_CUSTOMERS, payload: { data } };
}

export interface SubmitCustomersErrorAction extends Action<typeof SUBMIT_CUSTOMERS_ERROR> {
  payload: { error: Error; };
}

export function submitCustomersError(error: SubmitCustomersErrorAction["payload"]["error"]): SubmitCustomersErrorAction {
  return { type: SUBMIT_CUSTOMERS_ERROR, payload: { error } };
}

export function submitCustomersSuccess(): Action<typeof SUBMIT_CUSTOMERS_SUCCESS> {
  return { type: SUBMIT_CUSTOMERS_SUCCESS };
}