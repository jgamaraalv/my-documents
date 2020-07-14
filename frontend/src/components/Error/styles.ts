import styled from "styled-components";

import { Blue } from "../../styles/palette";

export const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  padding: 32px;
  text-align: center;

  p {
    margin: 0;
  }
  
  button {
    align-items: center;
    background: transparent;
    border: 1px solid ${Blue.regular};
    border-radius: 5px; 
    color: ${Blue.regular};
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: bold;
    margin-top: 12px;
    padding: 12px 24px;

    svg {
      margin-right: 6px;
    }
  }
`;