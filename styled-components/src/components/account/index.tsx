import React, { useState } from "react";

// @ts-ignore
import privado from "../../assets/images/privado.svg";
// @ts-ignore
import olho_icone from "../../assets/images/olho.svg";
// @ts-ignore
import dinheiro from "../../assets/images/dinheiro.svg";
// @ts-ignore
import {Balance, Box, Button, Detail, Icon} from "../UI";
// @ts-ignore
import { IconMargin } from "./Styles";

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icon src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
