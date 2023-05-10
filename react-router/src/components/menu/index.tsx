import Logo from "../../assets/logo";
import { MenuStyled } from "./styles";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </MenuStyled>
  );
};

export default Menu;
