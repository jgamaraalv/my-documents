import styled from "styled-components";

import { Blue, Shadow } from "../../styles/palette";

const DataContainer = styled.div`
  border: 1px solid ${Blue.light};
  background: white;
  border-radius: 8px;
  overflow-x: auto;

  -webkit-box-shadow: 0px 1px 1px 0px ${Shadow.light};
  -moz-box-shadow: 0px 1px 1px 0px ${Shadow.light};
  box-shadow: 0px 1px 1px 0px ${Shadow.light};
`;

export default DataContainer;