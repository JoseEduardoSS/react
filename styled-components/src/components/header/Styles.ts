import styled from "styled-components";
import { primaryColor } from "../UI/variables";

interface Props {
  primary?: boolean;
}

export const Header = styled.nav`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

export const ButtonHeader = styled.button`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props: Props) => (props.primary ? "white" : primaryColor)};
  color: ${(props: Props) => (props.primary ? primaryColor : "white")};
`;