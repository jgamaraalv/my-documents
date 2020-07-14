import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";

import { fetchCustomers } from "../../../store/modules/customers/actions";
import { StyledContainer, StyledForm } from "./styles";

const CustomersFilter: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState<null | string>();

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(fetchCustomers(name || ''));
  }

  const cleanButtonClickHandler = () => {
    setName('');
    dispatch(fetchCustomers());
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={formSubmitHandler}>
        <input type="text" value={name || ''} placeholder="Nome do cliente" onChange={nameChangeHandler}/>

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

export default CustomersFilter;