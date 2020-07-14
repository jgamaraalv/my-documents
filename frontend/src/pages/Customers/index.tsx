import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlusSquare } from "react-icons/fa";

import CustomerForm from "../../components/forms/Customer";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import CustomersList from "./CustomersList";
import DataContainer from "../../components/DataContainer";
import ApplicationState from "../../store/State";
import { fetchCustomers } from "../../store/modules/customers/actions";
import { openDialog } from "../../store/dialog/actions";
import { StyledActionsContainer, StyledContainer, StyledNoData } from "./styles";
import CustomersFilter from "./CustomersFilter";
 
const Customers: React.FC = () => {
  const dispatch = useDispatch();

  const customersState = useSelector((state: ApplicationState) => state.modules.customers);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const addButtonClickHandler = () => {
    dispatch(openDialog(<CustomerForm/>));
  }

  const retryRequestHandler = () => {
    dispatch(fetchCustomers());
  }

  let contentRender: JSX.Element | undefined = undefined;

  switch (customersState.customers.status) {
    case "error": 
      contentRender = <Error onRetryRequest={retryRequestHandler}/>;
      break;

    case "loaded": 
      contentRender = customersState.customers.results.length > 0 
        ? <CustomersList/>
        : (
          <StyledNoData>
            Nenhum cliente encontrado
          </StyledNoData>
        );
      break;

    case "loading":
      contentRender = <Loading/>;
      break;
  }

  return (
    <>
      <CustomersFilter/> 

      <StyledContainer>
        <StyledActionsContainer>
          <button onClick={addButtonClickHandler}>
            <FaPlusSquare/> Novo cliente
          </button>
        </StyledActionsContainer>

        <DataContainer>
          {contentRender}
        </DataContainer>
      </StyledContainer>
    </>
  );
};

export default Customers;