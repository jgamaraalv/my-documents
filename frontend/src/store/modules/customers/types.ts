import AsyncState from "../../../types/AsyncState";
import Customer from "../../../types/Customer";

type CustomersModuleState = {
  customer: AsyncState<{
    result: Customer;
  }>;
  customers: AsyncState<{
    results: Customer[];
  }>;
  submit: AsyncState;
  remove: AsyncState;
};

export default CustomersModuleState;