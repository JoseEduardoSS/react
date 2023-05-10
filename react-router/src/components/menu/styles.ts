import styled from "styled-components";
import {
  dark,
  darkGrey,
  paddingH,
  paddingHMd,
  paddingHMobile,
  paddingHSm,
} from "../../UI/variables";
import { desktop_md, desktop_sm, desktop_xsm } from "../../UI/breakpoints";

export const MenuStyled = styled.nav`
  display: flex;
  padding: 20px ${paddingH};
  @media (max-width: ${desktop_xsm}) {
    padding: 20px ${paddingHMobile};
  }
  @media (min-width: ${desktop_xsm}) and (max-width: ${desktop_sm}) {
    padding: 20px ${paddingHSm};
  }
  @media (min-width: ${desktop_sm}) and (max-width: ${desktop_md}) {
    padding: 20px ${paddingHMd};
  }

  ul {
    align-items: center;
    display: flex;
  }

  li {
    list-style-type: none;
    padding: 0 20px;

    a {
      color: ${dark};
      cursor: pointer;
      font-size: 24px;
      font-weight: 600;
      text-decoration: none;
      transition: 0.2s ease;

      &:hover {
        color: ${darkGrey};
      }
    }
  }
`;
