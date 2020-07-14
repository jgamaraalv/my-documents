import styled from "styled-components";

import { rules } from "../../../styles/breakpoints";
import { Black, Blue, Shadow, White } from "../../../styles/palette";

export const StyledContainer = styled.div`
  background: ${White.regular};

  -webkit-box-shadow: 0px 1px 1px 0px ${Shadow.light};
  -moz-box-shadow: 0px 1px 1px 0px ${Shadow.light};
  box-shadow: 0px 1px 1px 0px ${Shadow.light};

  & > div {
    margin: 0 auto;
    display: flex;
    padding: 0 16px;

    @media ${rules.mdOnly} {
      max-width: 768px;
    }

    @media ${rules.lgOnly} {
      max-width: 1024px;
    }
    
    @media ${rules.xl} {
      max-width: 1366px;
      padding: 0 32px;
    }
  }

  svg {
    color: ${Blue.regular};
    margin-right: 6px;
  }

  h1 {
    align-items: center;
    color: ${Black.regular};
    display: flex;
    font-size: 24px;
    font-weight: bold;
  }

  ul {
    align-items: center;
    display: flex;
    list-style: none;
    margin-left: 32px;
    padding: 0;

    li {
      position: relative;

      &:not(:last-child) {
        margin-right: 24px;

        &:after {
          background: ${Black.regular};
          content: "";
          height: 12px;
          margin-top: -6px;
          position: absolute;
          right: -12px;
          top: 50%;
          width: 1px;
        }
      }
    }

    a {
      color: ${Blue.regular};
      text-decoration: none;
    }
  }
`;