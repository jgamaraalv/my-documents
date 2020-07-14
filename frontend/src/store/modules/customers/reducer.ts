import { Reducer } from "redux";

import { 
  FETCH_CUSTOMER, FETCH_CUSTOMER_ERROR, FETCH_CUSTOMER_SUCCESS, RESET_CUSTOMER_STATE, FetchCustomerErrorAction,
  FETCH_CUSTOMERS, FETCH_CUSTOMERS_ERROR, FETCH_CUSTOMERS_SUCCESS, FetchCustomersErrorAction,
  REMOVE_CUSTOMERS, REMOVE_CUSTOMERS_ERROR, REMOVE_CUSTOMERS_SUCCESS, RemoveCustomersErrorAction,  
  SUBMIT_CUSTOMERS, SUBMIT_CUSTOMERS_ERROR, SUBMIT_CUSTOMERS_SUCCESS, SubmitCustomersErrorAction,  
} from "./actions";
import CustomersModuleState from "./types";

const getInitialState = (): CustomersModuleState => ({
  customer: {},
  customers: {},
  submit: {},
  remove: {},
});

const customersReducer: Reducer<CustomersModuleState> = (state = getInitialState(), action)  => {
  switch (action.type) {
    case FETCH_CUSTOMER:
      return {
        ...state,
        customer: {
          error: undefined,
          status: "loading",
        }
      };

    case FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: {
          ...state.customer,
          result: action.payload.customer,
          error: undefined,
          status: "loaded",
        }
      };

    case FETCH_CUSTOMER_ERROR:
      return {
        ...state,
        customer: {
          ...state.customer,
          ...(action as FetchCustomerErrorAction).payload,
          status: "error",
        }
      };
    
    case RESET_CUSTOMER_STATE:
      return {
        ...state,
        customer: getInitialState().customer,
    };

    case FETCH_CUSTOMERS:
      return {
        ...state,
        customers: {
          error: undefined,
          status: "loading",
        }
      };

    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: {
          ...state.customers,
          results: action.payload.customers,
          error: undefined,
          status: "loaded",
        }
      };

    case FETCH_CUSTOMERS_ERROR:
      return {
        ...state,
        customers: {
          ...state.customers,
          ...(action as FetchCustomersErrorAction).payload,
          status: "error",
        }
      };

    case REMOVE_CUSTOMERS:
      return {
        ...state,
        remove: {
          error: undefined,
          status: "loading",
        }
      };

    case REMOVE_CUSTOMERS_SUCCESS:
      return {
        ...state,
        remove: {
          ...state.remove,
          error: undefined,
          status: "loaded",
        }
      };

    case REMOVE_CUSTOMERS_ERROR:
      return {
        ...state,
        remove: {
          ...state.remove,
          ...(action as RemoveCustomersErrorAction).payload,
          status: "error",
        }
      };

    case SUBMIT_CUSTOMERS:
      return {
        ...state,
        submit: {
          error: undefined,
          status: "loading",
        }
      };

    case SUBMIT_CUSTOMERS_SUCCESS:
      return {
        ...state,
        submit: {
          ...state.submit,
          error: undefined,
          status: "loaded",
        }
      };

    case SUBMIT_CUSTOMERS_ERROR:
      return {
        ...state,
        submit: {
          ...state.submit,
          ...(action as SubmitCustomersErrorAction).payload,
          status: "error",
        }
      };

    default:
      return state;
  }
};

export default customersReducer;