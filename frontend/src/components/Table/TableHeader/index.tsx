import styled from "styled-components";

import TableHeaderCell from "../TableHeaderCell";

const TableHeader = styled.thead`
  ${TableHeaderCell} {
    font-weight: bold;
    padding: 16px;
    text-transform: uppercase;
  }
`;

export default TableHeader;