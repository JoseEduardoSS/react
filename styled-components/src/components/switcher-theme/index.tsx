import React from "react";
// @ts-ignore
import ThemeOn from "../../assets/images/themeOn.svg";
// @ts-ignore
import ThemeOff from "../../assets/images/themeOff.svg";
// @ts-ignore
import { Icon } from "../UI";

const Light = <Icon src={ThemeOn} alt="Tema Claro" />;
const Dark = <Icon src={ThemeOff} alt="Tema Escuro" />;

// @ts-ignore
export default ({ tema }) => (tema ? Dark : Light);
