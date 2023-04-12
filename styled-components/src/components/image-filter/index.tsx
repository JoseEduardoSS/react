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
import { Icon } from "../UI";

// @ts-ignore
export default (type) => {
  const Images = {
    Restaurante: <Icon src={alimentacao} alt="Restaurante" />,
    Utilidades: <Icon src={utilidades} alt="Utilidades" />,
    Saude: <Icon src={saude} alt="Saude" />,
    Transporte: <Icon src={transporte} alt="Transporte" />,
    default: <Icon src={outros} alt="Outros" />,
  };

  // @ts-ignore
  return Images[type] || Images.default;
};
