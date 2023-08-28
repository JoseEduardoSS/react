import { Box, Button, TextField, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";
import http from "../../../http";

const FormularioRestaurante = () => {
  const params = useParams<{ id: string }>();

  const [nomeRestaurante, setNomeRestaurante] = useState<string>("");

  useEffect(() => {
    if (params.id) {
      http
        .get<IRestaurante>(`restaurantes/${params.id}/`)
        .then((response) => setNomeRestaurante(response.data.nome))
        .catch((error) => console.log(error));
    }
  }, [params]);


  const aoSubmeter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (params.id) {
      http
        .put(`restaurantes/${params.id}/`, {
          nome: nomeRestaurante,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } else {
      http
        .post("restaurantes/", {
          nome: nomeRestaurante,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Typography component="h1" variant="h6">
        Formulário de Restaurantes
      </Typography>
      <Box component="form" sx={{ width: "100%" }} onSubmit={aoSubmeter}>
        <TextField
          value={nomeRestaurante}
          onChange={(event) => setNomeRestaurante(event.target.value)}
          label="Nome do Restaurante"
          variant="standard"
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 1 }}
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioRestaurante;
