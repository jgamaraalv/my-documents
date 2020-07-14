import { Reducer } from "redux";

import { 
  FETCH_CONTRACT, FETCH_CONTRACT_ERROR, FETCH_CONTRACT_SUCCESS, RESET_CONTRACT_STATE, FetchContractErrorAction,
  FETCH_CONTRACTS, FETCH_CONTRACTS_ERROR, FETCH_CONTRACTS_SUCCESS, FetchContractsErrorAction,
  FETCH_CONTRACTS_DATA, FETCH_CONTRACTS_DATA_ERROR, FETCH_CONTRACTS_DATA_SUCCESS, FetchContractsDataErrorAction,
  REMOVE_CONTRACTS, REMOVE_CONTRACTS_ERROR, REMOVE_CONTRACTS_SUCCESS, RemoveContractsErrorAction,  
  SUBMIT_CONTRACTS, SUBMIT_CONTRACTS_ERROR, SUBMIT_CONTRACTS_SUCCESS, SubmitContractsErrorAction,  
} from "./actions";
import ContractsModuleState from "./types";

const getInitialState = (): ContractsModuleState => ({
  contract: {},
  contracts: {},
  contractsData: {},
  submit: {},
  remove: {},
});

const contractsReducer: Reducer<ContractsModuleState> = (state = getInitialState(), action)  => {
  switch (action.type) {
    case FETCH_CONTRACT:
      return {
        ...state,
        contract: {
          error: undefined,
          status: "loading",
        }
      };

    case FETCH_CONTRACT_SUCCESS:
      return {
        ...state,
        contract: {
          ...state.contract,
          result: action.payload.contract,
          error: undefined,
          status: "loaded",
        }
      };

    case FETCH_CONTRACT_ERROR:
      return {
        ...state,
        contract: {
          ...state.contract,
          ...(action as FetchContractErrorAction).payload,
          status: "error",
        }
      };
    
    case RESET_CONTRACT_STATE:
      return {
        ...state,
        contract: getInitialState().contract,
    };

    case FETCH_CONTRACTS:
      return {
        ...state,
        contracts: {
          error: undefined,
          status: "loading",
        }
      };

    case FETCH_CONTRACTS_SUCCESS:
      return {
        ...state,
        contracts: {
          ...state.contracts,
          results: action.payload.contracts,
          error: undefined,
          status: "loaded",
        }
      };

    case FETCH_CONTRACTS_ERROR:
      return {
        ...state,
        contracts: {
          ...state.contracts,
          ...(action as FetchContractsErrorAction).payload,
          status: "error",
        }
      };

    case FETCH_CONTRACTS_DATA:
      return {
        ...state,
        contractsData: {
          error: undefined,
          status: "loading",
        }
      };

    case FETCH_CONTRACTS_DATA_SUCCESS:
      return {
        ...state,
        contracts: {
          ...state.contracts,
          results: action.payload.contracts,
        },
        contractsData: {
          ...state.contractsData,
          error: undefined,
          status: "loaded",
        }
      };

    case FETCH_CONTRACTS_DATA_ERROR:
      return {
        ...state,
        contractsData: {
          ...state.contracts,
          ...(action as FetchContractsDataErrorAction).payload,
          status: "error",
        }
      };

    case REMOVE_CONTRACTS:
      return {
        ...state,
        remove: {
          error: undefined,
          status: "loading",
        }
      };

    case REMOVE_CONTRACTS_SUCCESS:
      return {
        ...state,
        remove: {
          ...state.remove,
          error: undefined,
          status: "loaded",
        }
      };

    case REMOVE_CONTRACTS_ERROR:
      return {
        ...state,
        remove: {
          ...state.remove,
          ...(action as RemoveContractsErrorAction).payload,
          status: "error",
        }
      };

    case SUBMIT_CONTRACTS:
      return {
        ...state,
        submit: {
          error: undefined,
          status: "loading",
        }
      };

    case SUBMIT_CONTRACTS_SUCCESS:
      return {
        ...state,
        submit: {
          ...state.submit,
          error: undefined,
          status: "loaded",
        }
      };

    case SUBMIT_CONTRACTS_ERROR:
      return {
        ...state,
        submit: {
          ...state.submit,
          ...(action as SubmitContractsErrorAction).payload,
          status: "error",
        }
      };

    default:
      return state;
  }
};

export default contractsReducer;