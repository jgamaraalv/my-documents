import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegSave } from "react-icons/fa";

import ApplicationState from "../../../store/State";
import Form, { Label } from "../../../components/Form";
import { editContract, resetContractState, submitContracts } from "../../../store/modules/contracts/actions";
import { fetchCustomers } from "../../../store/modules/customers/actions";
import { closeDialog } from "../../../store/dialog/actions";
import checkFileTypeAccepted from "../../../helpers/checkFileTypeAccepted";
import Loading from "./Loading";

const acceptedMimeTypes = "application/pdf, application/msword";

interface FormErrors {
  input: string;
  message: string;
}

const ContractForm: React.FC = () => {
  const dispatch = useDispatch();
  const contractsState = useSelector((state: ApplicationState) => state.modules.contracts);
  const customersState = useSelector((state: ApplicationState) => state.modules.customers);

  const [title, setTitle] = useState<null | string>();
  const [startDate, setStartDate] = useState<null | string>();
  const [endDate, setEndDate] = useState<null | string>();
  const [file, setFile] = useState<null | FileList>();
  const [parts, setParts] = useState<undefined | string[]>();
  const [formErrors, setFormErrors] = useState<FormErrors[] | []>([]);

  const validateInputs = () => {
    const formErrors = [];

    if (!title) {
      formErrors.push({ 
        input: "title",
        message: "Campo obrigatório"
      });
    }

    if (!startDate) {
      formErrors.push({ 
        input: "start-date",
        message: "Campo obrigatório"
      });
    }

    if (!endDate) {
      formErrors.push({ 
        input: "end-date",
        message: "Campo obrigatório"
      });
    }

    if (!file) {
      formErrors.push({ 
        input: "file",
        message: "Campo obrigatório"
      });
    }

    if (!parts) {
      formErrors.push({ 
        input: "parts",
        message: "Adicione ao menos uma parte no contrato"
      });
    }

    if (formErrors.length > 0) {
      setFormErrors(formErrors);
    }
  }

  const verifyInputError = (inputName: string) => {
    return formErrors.filter(error => error.input === inputName)[0]?.message;
  }
  
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    validateInputs();

    if (!title || !startDate || !endDate || !file || !parts) {
      return;
    }

    if (!contractsState.contract.result?.id) {
      dispatch(submitContracts({ title, startDate, endDate, file, parts }));
      return;
    }

    dispatch(editContract({ id: contractsState.contract.result.id, title, startDate, endDate, file, parts }));
  }

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const startDateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.currentTarget.value);
  };

  const endDateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.currentTarget.value);
  };

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = document.getElementById('input-file') as HTMLInputElement;

    if (!event.currentTarget.files || !input) {
      return;
    }

    if (!checkFileTypeAccepted(event.currentTarget.files[0], acceptedMimeTypes)) {
      setFormErrors([...formErrors.filter(error => error.input !== "file"), {
        input: "file",
        message: "O arquivo deve ser um DOC ou PDF",
      }]);

      input.value = "";
      return; 
    }

    setFile(event.currentTarget.files);
  };

  const partsChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const partsValue = Array.from(event.currentTarget.selectedOptions, option => option.value);

    setParts(partsValue);
  } 

  const cancelButtonClickHandler = () => dispatch(closeDialog());

  useEffect(() => {
    if (contractsState.contract.result?.id) {
      const contract = contractsState.contract.result;

      setTitle(contract.title);
      setStartDate(contract.startDate);
      setEndDate(contract.endDate);
      setFile(contract.file);
      setParts(contract.parts);
    }
  }, [contractsState.contract]);

  useEffect(() => {
    dispatch(fetchCustomers());

    return () => {
      dispatch(resetContractState());
    }
  }, [dispatch]);

  const customersOptions = customersState.customers.status === "loaded" && (
    customersState.customers.results.map(customer => (
      <option key={customer.id} value={customer.id}>
        {customer.name}
      </option>
    ))
  );

  return (
    contractsState.contract.status === "loading" ? (
      <Loading/>
    ) : (
      <Form onSubmit={formSubmitHandler}>
        <Label error={verifyInputError('title')}>
          Título

          <input type="text" value={title || ''} onChange={titleChangeHandler}/>
        </Label>
        
        <Label error={verifyInputError('start-date')}>
          Data de início

          <input id="start-date" type="date" value={startDate || ''} onChange={startDateChangeHandler}/>
        </Label>

        <Label error={verifyInputError('end-date')}>
          Data de vencimento

          <input 
            type="date" 
            placeholder="Data de vencimento" 
            min={startDate || ''} 
            value={endDate || ''} 
            onChange={endDateChangeHandler}
          />
        </Label>

        {!contractsState.contract.result && (
          <Label error={verifyInputError('file')}>
            Arquivo 

            <input id="input-file" accept={acceptedMimeTypes} type="file" onChange={fileChangeHandler}/>
          </Label>
        )}

        <Label error={verifyInputError('parts')}>
          Partes

          <select value={parts} onChange={partsChangeHandler} multiple>
            {customersOptions}
          </select>
        </Label>
        
        <div className="form-actions">
          <button type="button" onClick={cancelButtonClickHandler}>
            Cancelar
          </button>

          <button type="submit" disabled={contractsState.submit.status === "loading"}>
            <FaRegSave/> Salvar
          </button>
        </div>
      </Form>
    )
  )
};

export default ContractForm;