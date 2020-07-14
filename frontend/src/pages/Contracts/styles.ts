import styled from "styled-components";

import { rules } from "../../styles/breakpoints";
import { Blue, White } from "../../styles/palette";

export const StyledActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    align-items: center;
    background: ${Blue.regular};
    border: 1px solid ${Blue.regular};
    border-radius: 5px; 
    color: ${White.regular};
    cursor: pointer;
    display: flex;
    font-weight: bold;
    margin-bottom: 8px;
    padding: 12px 24px;

    svg {
      margin-right: 6px;
    }
  }
`;

export const StyledNoData = styled.div`
  font-size: 18px;
  padding: 32px;
  text-align: center;
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 16px;

  @media ${rules.mdOnly} {
    max-width: 768px;
  }

  @media ${rules.lgOnly} {
    max-width: 1024px;
  }
  
  @media ${rules.xl} {
    max-width: 1366px;
    padding: 32px;
  }
`;