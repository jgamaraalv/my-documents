import styled from "styled-components";

import { rules } from "../../styles/breakpoints";
import { White, Shadow } from "../../styles/palette";

export const StyledModalContainer = styled.div`
  align-items: flex-start;
  background: ${White.regular};
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;

  @media ${rules.md} {
    background: rgba(0,0,0, .6);
    padding: 32px;
  }

  & > div {
    background: ${White.regular};
    padding: 16px;
    height: 100%;
    width: 100%;

    @media ${rules.md} {
      border-radius: 8px;
      padding: 32px;
      height: auto;
      width: auto;
      
      -webkit-box-shadow: 0px 1px 1px 0px ${Shadow.light};
      -moz-box-shadow: 0px 1px 1px 0px ${Shadow.light};
      box-shadow: 0px 1px 1px 0px ${Shadow.light};
    }
  }
`;