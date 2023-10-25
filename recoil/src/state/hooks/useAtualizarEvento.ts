import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import {listaEventosState} from "../atom";

const useAtualizarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);
  return (evento: IEvento) =>
    setListaEventos((listaAntiga) => {
      const index = listaAntiga.findIndex((evt) => evt.id === evento.id);
      return [
        ...listaAntiga.slice(0, index),
        evento,
        ...listaAntiga.slice(index + 1),
      ];
    });
};

export default useAtualizarEvento;
