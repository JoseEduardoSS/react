import { Filters, StyledCardapio } from "./styles";
import Search from "./Search";
import Filter from "./Filter";
import Organizer from "./Organizer";
import Itens from "./Itens";

const Cardapio = () => {
  return (
    <StyledCardapio>
      <h3>Cárdapio</h3>
      <Search />
      <Filters>
        <Filter />
        <Organizer />
      </Filters>
      <Itens />
    </StyledCardapio>
  );
};

export default Cardapio;
