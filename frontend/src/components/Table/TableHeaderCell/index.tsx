import styled from "styled-components";

import { Blue } from "../../../styles/palette";

const TableHeaderCell = styled.th`
  border-bottom: 1px solid ${Blue.light};
  font-weight: inherit;
  text-align: left;
`;

export default TableHeaderCell;