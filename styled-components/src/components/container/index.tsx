import React from "react";

// @ts-ignore
import Title from "../Title";
// @ts-ignore
import Account from "../Account";
// @ts-ignore
import { ContainerStyled, Content } from "./Styles";
// @ts-ignore
import Extract from "../extract";

const Container = () => {
  return (
    <ContainerStyled>
      <Title>Olá Fulano!</Title>
      <Content>
        <Account />
        <Extract />
      </Content>
    </ContainerStyled>
  );
};

export default Container;
