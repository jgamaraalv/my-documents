import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";

import { fetchContracts } from "../../../store/modules/contracts/actions";
import { StyledContainer, StyledForm } from "./styles";

const ContractsFilter: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<null | string>();

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(fetchContracts(title || ''));
  }

  const cleanButtonClickHandler = () => {
    setTitle('');
    dispatch(fetchContracts());
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={formSubmitHandler}>
        <input type="text" value={title || ''} placeholder="Título do contrato" onChange={titleChangeHandler}/>

        <button className="submit-button" type="submit">
          <FaSearch/> Buscar
        </button>
        
        <button className="clean-button" type="button" onClick={cleanButtonClickHandler}>
          Limpar
        </button>
      </StyledForm>
    </StyledContainer>
  );
}   

export default ContractsFilter;