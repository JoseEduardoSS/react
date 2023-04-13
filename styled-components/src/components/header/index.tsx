import React from "react";
// @ts-ignore
import bank_logo from "../../assets/images/bank_logo.svg";
import { ButtonHeader, Header, Logo } from "./Styles";

const Cabecalho = () => {
  return (
    <Header>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <ButtonHeader primary>Ajuda</ButtonHeader>
        <ButtonHeader>Sair</ButtonHeader>
      </div>
    </Header>
  );
};

export default Cabecalho;