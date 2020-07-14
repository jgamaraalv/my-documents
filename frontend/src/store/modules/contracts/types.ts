import AsyncState from "../../../types/AsyncState";
import Contract from "../../../types/Contract";

type ContractsModuleState = {
  contract: AsyncState<{
    result: Contract;
  }>;
  contracts: AsyncState<{
    results: Contract[];
  }>;
  contractsData: AsyncState;
  submit: AsyncState;
  remove: AsyncState;
};

export default ContractsModuleState;