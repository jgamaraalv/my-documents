import React from "react";
import styled, { css } from "styled-components";

import { Red } from "../../../styles/palette";
 
interface StyledLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  error?: string;
}

const StyledLabel = styled.label<LabelProps>`
  display: flex;
  font-weight: bold;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 12px;
  }

  ${props => props.error && css`
    &.label {
      color: ${Red.regular};

      input {
        border-color: ${Red.regular};
      }
    }
  `};

  span {
    font-size: 13px;
    font-weight: normal;
    margin-top: 6px;
  }
`;

type LabelProps = StyledLabelProps;

const Label: React.FC<LabelProps> = ({ error, children, ...props }) => {
  return (
    <StyledLabel className="label" error={error} {...props}>
      {children}

      {error && (
        <span>
          {error}
        </span>
      )}
    </StyledLabel>
  );
};

export default Label;