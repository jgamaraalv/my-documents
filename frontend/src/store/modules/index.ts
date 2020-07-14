import ContractsModuleState from "./contracts/types";
import CustomersModuleState from "./customers/types";

export interface ModulesState {
  contracts: ContractsModuleState;
  customers: CustomersModuleState;
}