import menu from './itens.json';
import { StyledItens } from './styles';
import Item from './item';
import {
  useFilterContext,
  useOrganizerContext,
  useSearchContext,
} from '../../../common/context/context';
import { useEffect, useState } from 'react';

type item = typeof menu[0];

const Itens = () => {
  const { search } = useSearchContext();
  const { filter } = useFilterContext();
  const { organizer } = useOrganizerContext();

  const [list, setList] = useState<item[]>(menu);

  function searchTest(item: item) {
    const regex = new RegExp(search, 'i');
    const searchIn = `${item.title} ${item.description}`;
    return regex.test(searchIn);
  }

  function filterTest(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function organize(newList: typeof menu) {
    switch (organizer) {
    case 'porcao':
      return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
    case 'qtd_pessoas':
      return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
    case 'preco':
      return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
    default:
      return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item: item) => searchTest(item) && filterTest(item.category.id)
    );
    setList(organize(newList));
  }, [search, filter, organizer]);

  return (
    <StyledItens>
      {list.map((item: item) => (
        <Item key={item.id} {...item} />
      ))}
    </StyledItens>
  );
};

export default Itens;
