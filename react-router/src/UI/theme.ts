import styled from "styled-components";
import { desktop_md, desktop_sm, desktop_xsm } from "./breakpoints";
import {
  dark,
  paddingH,
  paddingHMd,
  paddingHMobile,
  paddingHSm,
} from "./variables";

export const Container = styled.div`
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

export const Title = styled.h1`
  color: ${dark};
  font-size: 3rem;
  margin-bottom: 30px;
`;
