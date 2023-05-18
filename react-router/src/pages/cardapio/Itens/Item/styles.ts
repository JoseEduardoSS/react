import styled from "styled-components";
import { desktop_xsm, mobile } from "../../../../UI/breakpoints";
import { darkGrey, red } from "../../../../UI/variables";



export const StyledItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

export const Image = styled.div`
  min-width: 240px;
  @media (max-width: ${desktop_xsm}) {
    width: 100%;
  }

  img {
    border-radius: 8px;
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 20px;
  @media (max-width: ${desktop_xsm}) {
    flex-direction: row;
    margin-top: 20px;
    padding: 0;
  }
`;

export const Title = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    color: ${darkGrey};
    font-size: 1.3rem;
    font-weight: 600;
    max-width: 600px;
    margin-bottom: 20px;
  }
`;