import styled from "styled-components";
import {
  paddingH,
  paddingHMd,
  paddingHMobile,
  paddingHSm,
  red,
} from "../../UI/variables";
import { desktop_md, desktop_sm, desktop_xsm } from "../../UI/breakpoints";

export const StyledFooter = styled.footer`
  background-color: ${red};
  display: flex;
  justify-content: flex-end;
  padding: 10px ${paddingH};
  @media (max-width: ${desktop_xsm}) {
    padding: 10px ${paddingHMobile};
  }
  @media (min-width: ${desktop_xsm}) and (max-width: ${desktop_sm}) {
    padding: 10px ${paddingHSm};
  }
  @media (min-width: ${desktop_sm}) and (max-width: ${desktop_md}) {
    padding: 10px ${paddingHMd};
  }
`;
