import { selector } from "recoil";
import { filtroState, listaEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroState);
    const eventos = get(listaEventosState);
    return eventos.filter((evento) => {
      if (!filtro.data) {
        return true;
      }
      return (
        filtro.data.toISOString().slice(0, 10) ===
        evento.inicio.toISOString().slice(0, 10)
      );
    });
  },
});
