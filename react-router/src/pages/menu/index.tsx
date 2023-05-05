import { Cardapio, Filters, Header, MenuStyled } from './styles';
import Logo from '../../assets/logo';
import Search from './search';
import Filter from './filter';
import Organizer from './organizer';
import Itens from './itens';

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
        <Filters>
          <Filter />
          <Organizer />
        </Filters>
        <Itens />
      </Cardapio>
    </main>
  );
};

export default Menu;
