import filters from "./filters.json";
import { ButtonStyled, FilterStyled } from "./styles";
import { useFilterContext } from "../../../common/context/context";

type option = {
  id: number;
  label: string;
};

const Filter = () => {
  const { filter, setFilter } = useFilterContext();

  function selectFilter(option: option) {
    return setFilter(option.id);
  }

  return (
    <FilterStyled>
      {filters.map((option) => (
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
