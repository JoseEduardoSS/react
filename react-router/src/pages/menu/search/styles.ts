import styled from "styled-components";
import {mobile} from "../../../styles/breakpoints";
import {grey} from "../../../styles/variables";

export const SearchStyled = styled.div`
  align-items: center;
  background-color: ${grey};
  border-radius: 5px;
  display: flex;
  gap: 18px;
  height: 42px;
  justify-content: space-between;
  padding: 0 15px;
  width: 400px;
  @media (max-width: ${mobile}) {
    width: 100%;
  }
  input {
    background-color: ${grey};
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    outline: none;
    width: 100%;
    &::placeholder {
      color: #4c4d5e;
    }
  }
`;
