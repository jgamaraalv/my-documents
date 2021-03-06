import styled from "styled-components";

const TableRow = styled.tr`
  margin: 0;
  padding: 0;

  &:last-child {
    td {
      border-bottom: 0;
    }
  }
`;

export default TableRow;