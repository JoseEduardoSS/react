import styled from "styled-components";

export const ContainerStyled = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0 15vw;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;