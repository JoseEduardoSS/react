import React from "react";
// @ts-ignore
import {Box, Button} from "../UI";
import { extratoLista } from "../../info";
// @ts-ignore
import Itens from "../items";

const Extract = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Itens key={id} type={type} from={from} value={value} date={date}/>
        );
      })}
      <Button>Ver Mais</Button>
    </Box>
  );
};

export default Extract;
