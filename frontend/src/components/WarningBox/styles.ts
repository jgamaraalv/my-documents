import styled, { css } from "styled-components";

import { Green, White } from "../../styles/palette";

const commonButtonStyles = css`
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  padding: 16px 32px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }

  p {
    margin: 0;
    font-size: 16px;
  }

  button {
    ${commonButtonStyles}
    align-items: center;
    display: flex;

    svg {
      margin-right: 6px;
    }

    &.confirm-button {
      background: ${Green.regular};
      color: ${White.regular};
      margin-left: 12px;
    }

    &:disabled {
      opacity: .5;
    }
  }
`;