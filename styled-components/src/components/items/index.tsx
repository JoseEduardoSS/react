import React from "react";
// @ts-ignore
import {ItensStyled} from "./Styles"; // @ts-ignore
import Item from "../item"; // @ts-ignore
import ImageFilter from "../image-filter"; // @ts-ignore

// @ts-ignore
const Itens = (props) => {
  return (
    <ItensStyled>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </ItensStyled>
  );
};

export default Itens;
