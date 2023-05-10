import styled from "styled-components";
import {
  dark,
  paddingH,
  paddingHMd,
  paddingHMobile,
  paddingHSm,
} from "../../styles/variables";
import { desktop_md, desktop_sm, desktop_xsm } from "../../styles/breakpoints";

export const StyledCardapio = styled.section`
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

  > h3 {
    color: ${dark};
    font-size: 3rem;
    margin-bottom: 30px;
  }
`;

export const Filters = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
`;
