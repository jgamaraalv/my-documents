import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegSave } from "react-icons/fa";
import MaskedInput from "react-text-mask";

import ApplicationState from "../../../store/State";
import Form, { Label } from "../../../components/Form";
import { editCustomer, resetCustomerState, submitCustomers } from "../../../store/modules/customers/actions";
import { closeDialog } from "../../../store/dialog/actions";
import checkCpf from "../../../helpers/checkCpf";
import Loading from "./Loading";

const emailRegex = /^(([^<>()[\],;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i;

const phoneMask = (phoneNumber: string) => {
  const numbers = phoneNumber.match(/\d/g);
  let numberLength = 0;

  if (numbers) {
    numberLength = numbers.join("").length;
  }

  if (numberLength > 10) {
    return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  } else {
    return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }
}

interface FormErrors {
  input: string;
  message: string;
}

const CustomerForm: React.FC = () => {
  const dispatch = useDispatch();
  const customersState = useSelector((state: ApplicationState) => state.modules.customers);

  const [name, setName] = useState<null | string>();
  const [surname, setSurname] = useState<null | string>();
  const [email, setEmail] = useState<null | string>();
  const [cpf, setCpf] = useState<null | string>();
  const [telephone, setTelephone] = useState<null | string>();
  const [formErrors, setFormErrors] = useState<FormErrors[] | []>([]);

  const validateInputs = () => {
    const formErrors = [];

    if (!name) {
      formErrors.push({ 
        input: "name",
        message: "Campo obrigatório"
      });
    }

    if (!surname) {
      formErrors.push({ 
        input: "surname",
        message: "Campo obrigatório"
      });
    }

    if (!email) {
      formErrors.push({ 
        input: "email",
        message: "Campo obrigatório"
      });
    }

    if (!cpf) {
      formErrors.push({ 
        input: "cpf",
        message: "Campo obrigatório"
      });
    }

    if (!telephone) {
      formErrors.push({ 
        input: "telephone",
        message: "Campo obrigatório"
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

    if (!name || !surname || !email || !cpf || !telephone) {
      return;
    }

    if (!customersState.customer.result?.id) {
      dispatch(submitCustomers({ name, surname, email, cpf, telephone }));
      return;
    }

    dispatch(editCustomer({ id: customersState.customer.result.id, name, surname, email, cpf, telephone }));
  }

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const surnameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.currentTarget.value);
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const validateEmail = () => {
    const errorsWithoutEmailErros = formErrors.filter(error => error.input !== "email");

    if (!emailRegex.test(email || '')) {
      setFormErrors([...errorsWithoutEmailErros, {
        input: "email",
        message: "Digite um e-mail válido",
      }]);

      return;
    }

    setFormErrors([...errorsWithoutEmailErros]);
  }

  const cpfChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.currentTarget.value);
  };

  const validateCpf = () => {
    const errorsWithoutCpfErros = formErrors.filter(error => error.input !== "cpf");

    if (!checkCpf(cpf || '')) {
      setFormErrors([...errorsWithoutCpfErros, {
        input: "cpf",
        message: "Digite um CPF válido",
      }]);

      return;
    }

    setFormErrors([...errorsWithoutCpfErros]);
  }

  const telephoneChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(event.currentTarget.value);
  };

  const cancelButtonClickHandler = () => dispatch(closeDialog());

  useEffect(() => {
    if (customersState.customer.result?.id) {
      const customer = customersState.customer.result;

      setName(customer.name);
      setSurname(customer.surname);
      setEmail(customer.email);
      setCpf(customer.cpf);
      setTelephone(customer.telephone);
    }
  }, [customersState.customer]);

  useEffect(() => {
    return () => {
      dispatch(resetCustomerState());
    }
  }, [dispatch]);

  return (
    customersState.customer.status === "loading" ? (
      <Loading/>
    ) : (
      <Form onSubmit={formSubmitHandler}>
        <Label error={verifyInputError('name')}>
          Nome

          <input type="text" value={name || ''} onChange={nameChangeHandler}/>
        </Label>

        <Label error={verifyInputError('surname')}>
          Sobrenome

          <input type="text" value={surname || ''} onChange={surnameChangeHandler}/>
        </Label>

        <Label error={verifyInputError('email')}>
          E-mail

          <input type="text" value={email || ''} onChange={emailChangeHandler} onBlur={validateEmail}/>
        </Label>

        <Label error={verifyInputError('cpf')}>
          CPF

          <MaskedInput 
            mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-',/\d/, /\d/]} 
            type="text" 
            value={cpf || ''} 
            onChange={cpfChangeHandler}
            onBlur={validateCpf}
          />
        </Label>

        <Label error={verifyInputError('telephone')}>
          Telefone

          <MaskedInput 
            mask={phoneMask} 
            type="text" 
            value={telephone || ''} 
            onChange={telephoneChangeHandler}
          />
        </Label>
        
        <div className="form-actions">
          <button type="button" onClick={cancelButtonClickHandler}>
            Cancelar
          </button>

          <button type="submit" disabled={customersState.submit.status === "loading"}>
            <FaRegSave/> Salvar
          </button>
        </div>
      </Form>
    )
  )
};

export default CustomerForm;