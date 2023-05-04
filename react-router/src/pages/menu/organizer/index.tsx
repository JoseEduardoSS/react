import options from "./optionsValues.json";
import { Option, Options, StyledOrganizer } from "./styles";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useOrganizerContext } from "../../../common/context/context";

type option = typeof options[0];

const Organizer = () => {
  const { organizer, setOrganizer } = useOrganizerContext();

  const [open, setOpen] = useState(false);

  const name = organizer && options.find(
    (option: option) => option.value === organizer
  )?.nome;

  return (
    <StyledOrganizer
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
      active={organizer !== ""}
    >
      <span>{name || "Ordenar por:"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <Options active={open}>
        {options.map((option: option) => (
          <Option key={option.value} onClick={() => setOrganizer(option.value)}>
            {option.nome}
          </Option>
        ))}
      </Options>
    </StyledOrganizer>
  );
};

export default Organizer;
