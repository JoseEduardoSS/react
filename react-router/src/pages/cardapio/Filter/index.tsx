import filters from "./filters.json";
import { ButtonStyled, FilterStyled } from "./styles";
import { useFilterContext } from "../../../common/context/context";

type option = typeof filters[0];

const Filter = () => {
  const { filter, setFilter } = useFilterContext();

  function selectFilter(option: option) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }

  return (
    <FilterStyled>
      {filters.map((option: option) => (
        <ButtonStyled
          active={filter === option.id}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </ButtonStyled>
      ))}
    </FilterStyled>
  );
};

export default Filter;
