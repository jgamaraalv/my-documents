import React from "react";
import { FaFileContract } from "react-icons/fa";
import { Link } from "react-router-dom";

import { StyledContainer } from "./styles";

const Topbar: React.FC = () => {
  return (
    <StyledContainer>
      <div>
        <h1>
          <FaFileContract/>

          MyContracts
        </h1>

        <ul>
          <li>
            <Link to="/">
              Contratos
            </Link>
          </li>
          <li>
            <Link to="/customers">
              Clientes
            </Link>
          </li>
        </ul>
      </div>
    </StyledContainer>
  );
};

export default Topbar;