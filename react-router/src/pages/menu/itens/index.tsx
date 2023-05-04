import menu from "./itens.json";
import { StyledItens } from "./styles";
import Item from "./item";
import {
  useFilterContext,
  useOrganizerContext,
  useSearchContext,
} from "../../../common/context/context";
import { useEffect, useState } from "react";

type item = typeof menu[0];

const Itens = () => {
  const { search } = useSearchContext();
  const { filter } = useFilterContext();
  const { organizer } = useOrganizerContext();

  const [list, setList] = useState<item[]>(menu);

  function searchTest(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function filterTest(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  useEffect(() => {
    const newList = menu.filter((item: item) => {
      searchTest(item.title) && filterTest(item.category.id);
    });
    setList(newList);
  }, [search, filter]);

  return (
    <StyledItens>
      {list.map((item: item) => (
        <Item key={item.id} {...item} />
      ))}
    </StyledItens>
  );
};

export default Itens;
