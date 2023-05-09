import Logo from "../../assets/logo";
import { MenuStyled } from "./styles";

const Menu = () => {
  const routes = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Menu",
      to: "/menu",
    },
    {
      label: "About",
      to: "/about",
    },
  ];

  return (
    <MenuStyled>
      <Logo />
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <a href={route.to}>{route.label}</a>
          </li>
        ))}
      </ul>
    </MenuStyled>
  );
};

export default Menu;
