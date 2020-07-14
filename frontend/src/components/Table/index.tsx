import styled from "styled-components";

import { Blue, White } from "../../styles/palette";

export * from "./TableBody";
export { default as TableBody } from "./TableBody";

export * from "./TableBodyCell";
export { default as TableBodyCell } from "./TableBodyCell";

export * from "./TableHeader";
export { default as TableHeader } from "./TableHeader";

export * from "./TableHeaderCell";
export { default as TableHeaderCell } from "./TableHeaderCell";

export * from "./TableRow";
export { default as TableRow } from "./TableRow";

const Table = styled.table`
  border-spacing: 0;
  font-weight: 500;
  min-width: 765px;
  width: 100%;

  a {
    color: ${Blue.regular};
    font-weight: bold;
    text-decoration: none;
  }

  button {
    background: ${White.regular};
    border: 1px solid ${Blue.light};
    border-radius: 5px; 
    font-size: 16px;
    
    cursor: pointer;
    font-weight: bold;
    padding: 12px 12px 6px;

    &.remove-button {
      margin-right: 6px;
    }
  }
`;

export default Table;