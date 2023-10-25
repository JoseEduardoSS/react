import { useSetRecoilState } from "recoil";
import { listaEventosState} from "../atom";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";

const useAddEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);

  return (evento: IEvento) => {
    if (evento.inicio < new Date()) {
      throw new Error(
        "Não é possível adicionar um evento com data/hora de início menor que a data/hora atual."
      );
    }
    evento.id = obterId();
    return setListaEventos((listaEventos) => [...listaEventos, evento]);
  };
};

export default useAddEvento;
