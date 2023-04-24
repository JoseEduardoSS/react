import React from "react";
import { useSearchContext } from "../../../common/context/context";
import { SearchStyled } from "./styles";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  const { search, setSearch } = useSearchContext();

  return (
    <SearchStyled>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <CgSearch size={20} color="#4c4d5e"/>
    </SearchStyled>
  );
};

export default Search;
