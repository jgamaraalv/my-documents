import styled from "styled-components";

import Form from "../../../components/Form";
import { rules } from "../../../styles/breakpoints";
import { Blue, Grey, White, Shadow } from "../../../styles/palette";

export const StyledContainer = styled.div`
  background: ${White.regular};
  border-top: 12px solid ${Blue.regular};

  -webkit-box-shadow: 0px 1px 1px 0px ${Shadow.light};
  -moz-box-shadow: 0px 1px 1px 0px ${Shadow.light};
  box-shadow: 0px 1px 1px 0px ${Shadow.light};
`;


export const StyledForm = styled(Form)`
  align-items: center;
  display: flex;
  margin: 0 auto;
  padding: 16px;

  button {
    align-items: center;
    background: ${White.regular};
    border-radius: 5px; 
    cursor: pointer;
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: 12px 24px;
    margin-top: 4px;
    width: 100%;

    svg {
      margin-right: 6px;
    }

    &.submit-button {
      border: 1px solid ${Blue.regular};
      color: ${Blue.regular};
    }

    &.clean-button {
      border: 1px solid ${Grey.cyan};
      color: ${Grey.cyan};
    }
  }

  input {
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    min-width: 360px;
  }

  @media ${rules.md} {
    flex-direction: row;
    max-width: 768px;

    input {
      width: 360px;
      width: auto;
    }

    button {
      margin-left: 4px;
      margin-top: 0;
      width: auto;
    }
  }

  @media ${rules.lg} {
    max-width: 1024px;
  }
  
  @media ${rules.xl} {
    max-width: 1366px;
  }
`;