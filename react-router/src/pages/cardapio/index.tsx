import { Filters, Header, StyledCardapio } from "./styles";
import Search from "./Search";
import Filter from "./Filter";
import Organizer from "./Organizer";
import Itens from "./Itens";

const Cardapio = () => {
  return (
    <main>
      <Cardapio />
      <Header>
        <div>A casa do código e da massa</div>
      </Header>
      <StyledCardapio>
        <h3>Cárdapio</h3>
        <Search />
        <Filters>
          <Filter />
          <Organizer />
        </Filters>
        <Itens />
      </StyledCardapio>
    </main>
  );
};

export default Cardapio;
