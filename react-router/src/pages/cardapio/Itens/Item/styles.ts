import styled from "styled-components";
import { desktop_xsm, mobile } from "../../../../styles/breakpoints";
import { darkGrey, red } from "../../../../styles/variables";

type props = {
  type: string;
};

const massas = "#d73b3b";
const carnes = "#30201e";
const combos = "#e6c864";
const veganos = "#80aa40";

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

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  max-width: 700px;
  @media (max-width: ${desktop_xsm}) {
    justify-content: flex-end;
  }
  @media (max-width: ${mobile}) {
    justify-content: flex-start;
  }

  > div {
    margin: 10px;
  }
`;

export const Type = styled.div<props>`
  align-items: center;
  border-radius: 2px;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  padding: 10px 30px;
  background-color: ${(props: props) =>
    props.type === "massas"
      ? massas
      : props.type === "carnes"
      ? carnes
      : props.type === "combos"
      ? combos
      : veganos};
  color: ${(props: props) =>
    props.type === "massas"
      ? "#ffffff"
      : props.type === "carnes"
      ? "#ffffff"
      : props.type === "combos"
      ? "#000000"
      : "#000000"};
`;

export const Portion = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  justify-content: center;
`;

export const Serving = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  justify-content: center;
`;

export const Price = styled.div`
  align-items: center;
  display: flex;
  font-weight: bold;
  justify-content: center;
  color: ${red};
  font-size: 1.7rem;
`;
