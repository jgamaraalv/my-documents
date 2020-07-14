import styled from "styled-components";

import { Blue } from "../../../styles/palette";

const TableBodyCell = styled.td`
  border-bottom: 1px solid ${Blue.light};

  &:last-child {
    text-align: right;
  }
`;

export default TableBodyCell;