import { createGlobalStyle } from "styled-components";

import { White } from "./palette";

const StyledGlobal = createGlobalStyle`
  html {
    line-height: normal;
  }

  body {
    background: ${White.ice};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    overflow-x: hidden;
  }
`;

export default StyledGlobal;