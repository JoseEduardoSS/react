import styled from "styled-components";
import {
  paddingH,
  paddingHMd,
  paddingHMobile,
  paddingHSm,
} from "../../styles/variables";
import { desktop_md, desktop_sm, desktop_xsm } from "../../styles/breakpoints";

export const StyledHeader = styled.header`
  align-items: center;
  background-image: url("/src/assets/menu/header.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  height: 300px;
  padding: 0 ${paddingH};
  @media (max-width: ${desktop_xsm}) {
    padding: 0 ${paddingHMobile};
  }
  @media (min-width: ${desktop_xsm}) and (max-width: ${desktop_sm}) {
    padding: 0 ${paddingHSm};
  }
  @media (min-width: ${desktop_sm}) and (max-width: ${desktop_md}) {
    padding: 0 ${paddingHMd};
  }

  div {
    color: white;
    font-size: 5rem;
    min-width: 400px;
    width: 40%;
  }
`;
