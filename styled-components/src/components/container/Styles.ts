import styled from "styled-components";

export const ContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0 15vw;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
