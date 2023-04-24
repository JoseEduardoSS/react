import styled, { css } from "styled-components";
import { blue, grey } from "../../../styles/variables";

type buttonProps = {
  active: boolean;
};

export const FilterStyled = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 20px 0;
`;

export const ButtonStyled = styled.button<buttonProps>`
  align-items: center;
  background-color: ${(props) => props.active ? blue : grey};
  color: ${(props) => props.active ? "#ffffff" : "#000000"};
  border: none;
  border-radius: 4px;
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 150px;

  &:hover {
    cursor: pointer;
  }
`;