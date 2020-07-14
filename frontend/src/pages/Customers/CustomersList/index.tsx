import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

import CustomerForm from "../../../components/forms/Customer";
import WarningBox from "../../../components/WarningBox";
import Table, { TableBody, TableBodyCell, TableHeader, TableHeaderCell, TableRow } from "../../../components/Table";
import ApplicationState from "../../../store/State";
import { fetchCustomer, removeCustomers } from "../../../store/modules/customers/actions";
import { openDialog, closeDialog } from "../../../store/dialog/actions";

const CustomersList: React.FC = () => {
  const dispatch = useDispatch();
  
  const customersState = useSelector((state: ApplicationState) => state.modules.customers);

  const confirmButtonClickHandler = (id: number) => {
    dispatch(removeCustomers(id));
  }

  const cancelButtonClickHandler = () => {
    dispatch(closeDialog());
  }

  const removeButtonClickHandler = (id: number) => {
    dispatch(
      openDialog(
        <WarningBox 
          message={"Deseja excluir esse cliente permanentemente?"} 
          onConfirm={() => confirmButtonClickHandler(id)}
          onCancel={cancelButtonClickHandler}
        />
      )
    );
  }

  const editButtonClickHandler = (id: number) => {
    dispatch(openDialog(<CustomerForm/>));
    dispatch(fetchCustomer(id));
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            Nome
          </TableHeaderCell>

          <TableHeaderCell>
            Sobrenome
          </TableHeaderCell>

          <TableHeaderCell>
            E-mail
          </TableHeaderCell>

          <TableHeaderCell>
            CPF
          </TableHeaderCell>

          <TableHeaderCell>
            Telefone
          </TableHeaderCell>

          <TableHeaderCell/>
        </TableRow>
      </TableHeader>
        
      <TableBody>
        {customersState.customers.results!.map(customer => (
          <TableRow key={customer.id}>
            <TableBodyCell>
              {customer.name}
            </TableBodyCell>

            <TableBodyCell>
              {customer.surname}
            </TableBodyCell>

            <TableBodyCell>
              {customer.email}
            </TableBodyCell>

            <TableBodyCell>
              {customer.cpf}
            </TableBodyCell>

            <TableBodyCell>
              {customer.telephone}
            </TableBodyCell>

            <TableBodyCell>
              <button className="remove-button" onClick={() => removeButtonClickHandler(customer.id)}>
                <FaTrash/>
              </button>

              <button className="add-button" onClick={() => editButtonClickHandler(customer.id)}>
                <FaPencilAlt/>
              </button>
            </TableBodyCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
};

export default CustomersList;