import { Filters } from "./styles";
import Search from "./Search";
import Filter from "./Filter";
import Organizer from "./Organizer";
import Itens from "./Itens";
import { Title } from "../../UI/theme";

const Cardapio = () => {
  return (
    <section>
      <Title>Cárdapio</Title>
      <Search />
      <Filters>
        <Filter />
        <Organizer />
      </Filters>
      <Itens />
    </section>
  );
};

export default Cardapio;
