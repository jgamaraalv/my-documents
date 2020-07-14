import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { StyledModalContainer } from "./styles";

const ModalContainer: React.FC = ({ children }) => {
  const rootElement = useRef(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(rootElement.current);

    return () => {
      document.body.removeChild(rootElement.current);
    };
  }, []);

  return createPortal((
    <StyledModalContainer>
      <div>
        {children}
      </div>
    </StyledModalContainer>
  ), rootElement.current);
}

export default ModalContainer;