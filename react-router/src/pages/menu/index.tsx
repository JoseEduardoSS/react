import { Cardapio, Header, MenuStyled } from "./styles";
import Logo from "../../assets/logo";
import Search from "./search";
import Filter from "./filter";

const Menu = () => {

  return (
    <main>
      <MenuStyled>
        <Logo />
      </MenuStyled>
      <Header>
        <div>A casa do código e da massa</div>
      </Header>
      <Cardapio>
        <h3>Cárdapio</h3>
        <Search />
        <div>
          <Filter />
        </div>
      </Cardapio>
    </main>
  );
};

export default Menu;
