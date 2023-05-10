import { createContext, ReactNode, useContext, useState } from "react";
import { ContextValue } from "./ContextValue";

export const Context = createContext(new ContextValue());
Context.displayName = "Context";

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<null | number>(null);
  const [organizer, setOrganizer] = useState<string>("");

  return (
    <Context.Provider
      value={{ search, setSearch, filter, setFilter, organizer, setOrganizer }}
    >
      {children}
    </Context.Provider>
  );
};

export const useSearchContext = () => {
  const { search, setSearch } = useContext(Context);
  return { search, setSearch };
};

export const useFilterContext = () => {
  const { filter, setFilter } = useContext(Context);
  return { filter, setFilter };
};

export const useOrganizerContext = () => {
  const { organizer, setOrganizer } = useContext(Context);
  return { organizer, setOrganizer };
};
