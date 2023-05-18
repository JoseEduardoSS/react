import styled from "styled-components";
import {desktop_md, desktop_sm, desktop_xsm, mobile} from './breakpoints';
import {
  dark,
  paddingH,
  paddingHMd,
  paddingHMobile,
  paddingHSm, red,
} from './variables';

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


type props = {
  type?: string;
};

const massas = "#d73b3b";
const carnes = "#30201e";
const combos = "#e6c864";
const veganos = "#80aa40";


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

