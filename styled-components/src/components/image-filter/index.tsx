import React from "react";
// @ts-ignore
import alimentacao from "../../assets/images/alimentacao.svg";
// @ts-ignore
import outros from "../../assets/images/outros.svg";
// @ts-ignore
import saude from "../../assets/images/saude.svg";
// @ts-ignore
import transporte from "../../assets/images/transporte.svg";
// @ts-ignore
import utilidades from "../../assets/images/utilidades.svg";
// @ts-ignore
import {IconTheme} from "../UI";

// @ts-ignore
export default (type) => {
  const Images = {
    Restaurante: <IconTheme src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconTheme src={utilidades} alt="Utilidades" />,
    Saude: <IconTheme src={saude} alt="Saude" />,
    Transporte: <IconTheme src={transporte} alt="Transporte" />,
    default: <IconTheme src={outros} alt="Outros" />,
  };

  // @ts-ignore
  return Images[type] || Images.default;
};
