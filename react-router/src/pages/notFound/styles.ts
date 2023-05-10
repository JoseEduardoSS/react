import styled from "styled-components";
import {
  paddingH,
  paddingHMd,
  paddingHMobile,
  paddingHSm,
  red,
} from "../../UI/variables";
import { desktop_md, desktop_sm, desktop_xsm } from "../../UI/breakpoints";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 50px ${paddingH};
  @media (max-width: ${desktop_xsm}) {
    padding: 50px ${paddingHMobile};
  }
  @media (min-width: ${desktop_xsm}) and (max-width: ${desktop_sm}) {
    padding: 50px ${paddingHSm};
  }
  @media (min-width: ${desktop_sm}) and (max-width: ${desktop_md}) {
    padding: 50px ${paddingHMd};
  }
`;

export const Back = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    color: ${red};
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
