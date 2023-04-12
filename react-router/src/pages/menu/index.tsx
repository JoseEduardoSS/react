import { Menu } from "./styles";
// @ts-ignore
import {ReactComponent as Logo } from "../../assets/logo.svg";

const menu = () => {
  return (
    <main>
      <Menu>
        <Logo/>
      </Menu>
    </main>
  );
};

export default menu;
