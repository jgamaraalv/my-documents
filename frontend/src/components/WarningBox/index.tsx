import React from "react";

import { StyledContainer } from "./styles";

interface WarningBoxProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const WarningBox: React.FC<WarningBoxProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <StyledContainer>
      <p>
        {message}
      </p>

      <div>
        <button onClick={onCancel}>
          Cancelar
        </button>

        <button className="confirm-button" onClick={onConfirm}>
          Confirmar
        </button>
      </div>
    </StyledContainer>
  )
};

export default WarningBox;