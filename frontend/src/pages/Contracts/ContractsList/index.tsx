import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

import ContractForm from "../../../components/forms/Contract";
import WarningBox from "../../../components/WarningBox";
import Table, { TableBody, TableBodyCell, TableHeader, TableHeaderCell, TableRow } from "../../../components/Table";
import ApplicationState from "../../../store/State";
import { fetchContract, removeContracts } from "../../../store/modules/contracts/actions";
import { openDialog, closeDialog } from "../../../store/dialog/actions";
import { FILE_API } from "../../../config/env";

const ContractsList: React.FC = () => {
  const dispatch = useDispatch();
  
  const contractsState = useSelector((state: ApplicationState) => state.modules.contracts);
  const contractsWithDataState = useSelector((state: ApplicationState) => state.modules.contracts.contractsData);

  const confirmButtonClickHandler = (id: number) => {
    dispatch(removeContracts(id));
  }

  const cancelButtonClickHandler = () => {
    dispatch(closeDialog());
  }

  const removeButtonClickHandler = (id: number) => {
    dispatch(
      openDialog(
        <WarningBox 
          message={"Deseja excluir esse documento permanentemente?"} 
          onConfirm={() => confirmButtonClickHandler(id)}
          onCancel={cancelButtonClickHandler}
        />
      )
    );
  }

  const editButtonClickHandler = (id: number) => {
    dispatch(openDialog(<ContractForm/>));
    dispatch(fetchContract(id));
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            Título
          </TableHeaderCell>

          <TableHeaderCell>
            Data de início
          </TableHeaderCell>

          <TableHeaderCell>
            Data de vencimento
          </TableHeaderCell>

          <TableHeaderCell>
            Arquivo
          </TableHeaderCell>

          <TableHeaderCell>
            Partes
          </TableHeaderCell>

          <TableHeaderCell/>
        </TableRow>
      </TableHeader>
        
      <TableBody>
        {contractsState.contracts.results!.map(contract => (
          <TableRow key={contract.id}>
            <TableBodyCell>
              {contract.title}
            </TableBodyCell>

            <TableBodyCell>
              {contract.startDate}
            </TableBodyCell>

            <TableBodyCell>
              {contract.endDate}
            </TableBodyCell>

            <TableBodyCell>
              {contract.file && (
                <a href={`${FILE_API}/files/${contract.file}`} target="_blank" rel="noopener noreferrer">
                  Ver arquivo
                </a>
              )}
            </TableBodyCell>

            <TableBodyCell>
              {contract.parts 
                ? contractsWithDataState.status === "loading" 
                  ? 'Carregando...'
                  : contract.parts.join(", ")
                : ''
              }
            </TableBodyCell>

            <TableBodyCell>
              <button className="remove-button" onClick={() => removeButtonClickHandler(contract.id)}>
                <FaTrash/>
              </button>

              <button className="add-button" onClick={() => editButtonClickHandler(contract.id)}>
                <FaPencilAlt/>
              </button>
            </TableBodyCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
};

export default ContractsList;