import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2023-08-29T09:00"),
      fim: new Date("2023-08-29T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2023-08-30T09:00"),
      fim: new Date("2023-08-30T11:00"),
      completo: false,
      id: 1642342959,
    },
  ],
});
