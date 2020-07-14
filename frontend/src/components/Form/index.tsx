import styled, { css } from "styled-components";

import { Green, Grey, White } from "../../styles/palette";

const commonStyles = css`
  border: 1px solid ${Grey.cyan};
  border-radius: 5px;
  margin-top: 4px;
  padding: 12px;
`; 

const commonButtonStyles = css`
  border: 0;
  cursor: pointer;
  font-weight: bold;
  padding: 16px 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    ${commonStyles};

    &[type=file] {
      cursor: pointer;
    }
  }

  select {
    ${commonStyles};
  }

  .form-actions {
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;

    button {
      ${commonStyles};
      ${commonButtonStyles}
      align-items: center;
      display: flex;

      svg {
        margin-right: 6px;
      }

      &[type=submit] {
        background: ${Green.regular};
        color: ${White.regular};
        margin-left: 12px;
      }

      &:disabled {
        opacity: .5;
      }
    }
  }
`;

export { default as Label } from "./Label";
export default Form;