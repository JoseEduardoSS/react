import { useRecoilValue } from "recoil";
import { listaEventosState } from "../atom";
import {eventosFiltradosState} from "../seletores";

const useListaEventos = () => {
  return useRecoilValue(eventosFiltradosState);
};

export default useListaEventos;
