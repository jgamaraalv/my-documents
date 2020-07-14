import React from "react";
import { AiOutlineReload } from "react-icons/ai";

import { StyledContainer } from "./styles";

interface ErrorProps {
  onRetryRequest: () => void;
}

const Error: React.FC<ErrorProps> = ({ onRetryRequest }) => {
  return (  
    <StyledContainer>
      <p>
        Ocorreu um erro na solicitação dos dados.
      </p>

      <button onClick={onRetryRequest}>
        <AiOutlineReload/> Tentar novamente
      </button>
    </StyledContainer>
  );
}

export default Error;