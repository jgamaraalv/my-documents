import styled from "styled-components";

import { Black } from "../../../styles/palette";
import TableBodyCell from "../TableBodyCell";

const TableBody = styled.tbody`
  color: ${Black.regular};
  
  ${TableBodyCell} {
    padding: 16px;
  }
`;

export default TableBody;