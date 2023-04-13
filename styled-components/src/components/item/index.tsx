import React from "react";
import {ItemStyled} from "./Styles";

// @ts-ignore
const Item = ({ type, from, value }) => {
  return (
    <ItemStyled>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </ItemStyled>
  );
};

export default Item;
