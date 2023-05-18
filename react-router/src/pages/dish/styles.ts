import styled from "styled-components";
import { darkestGrey, red } from "../../UI/variables";
import { desktop_xsm, mobile } from "../../UI/breakpoints";

export const Back = styled.button`
  background-color: transparent;
  border: none;
  color: ${red};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Image = styled.div`
  width: 600px;

  img {
    border-radius: 8px;
    width: 100%;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  p {
    color: ${darkestGrey};
    font-size: 1.5rem;
    font-weight: bold;
  }

  &____detalhes {
    display: flex;
    justify-content: space-between;
  }
`;
