import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlusSquare } from "react-icons/fa";

import ContractForm from "../../components/forms/Contract";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import ContractsList from "./ContractsList";
import DataContainer from "../../components/DataContainer";
import ApplicationState from "../../store/State";
import { fetchContracts } from "../../store/modules/contracts/actions";
import { openDialog } from "../../store/dialog/actions";
import { StyledActionsContainer, StyledContainer, StyledNoData } from "./styles";
import ContractsFilter from "./ContractsFilter";
 
const Customers: React.FC = () => {
  const dispatch = useDispatch();

  const contractsState = useSelector((state: ApplicationState) => state.modules.contracts);

  useEffect(() => {
    dispatch(fetchContracts());
  }, [dispatch]);

  const addButtonClickHandler = () => {
    dispatch(openDialog(<ContractForm/>));
  }

  const retryRequestHandler = () => {
    dispatch(fetchContracts());
  }

  let contentRender: JSX.Element | undefined = undefined;

  switch (contractsState.contracts.status) {
    case "error": 
      contentRender = <Error onRetryRequest={retryRequestHandler}/>;
      break;

    case "loaded": 
      contentRender = contractsState.contracts.results.length > 0 
        ? <ContractsList/>
        : (
          <StyledNoData>
            Nenhum contrato encontrado
          </StyledNoData>
        );
      break;

    case "loading":
      contentRender = <Loading/>;
      break;
  }

  return (
    <>
      <ContractsFilter/>
      
      <StyledContainer>
        <StyledActionsContainer>
          <button onClick={addButtonClickHandler}>
            <FaPlusSquare/> Novo contrato
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