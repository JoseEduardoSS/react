import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import http from "../../../http";
import Itag from "../../../interfaces/Itag";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormularioPrato = () => {
  const [nomePrato, setNomePrato] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");

  const [tags, setTags] = useState<Itag[]>([]);
  const [tag, setTag] = useState<string>("");

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [restaurante, setRestaurante] = useState<string>("");

  const [imagem, setImagem] = useState<File | null>();

  useEffect(() => {
    http.get<{ tags: Itag[] }>("tags/").then((r) => setTags(r.data.tags));
    http
      .get<IRestaurante[]>(`restaurantes/`)
      .then((r) => setRestaurantes(r.data));
  }, []);

  const selecionarArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setImagem(event.target.files[0]);
    } else {
      setImagem(null);
    }
  };

  const aoSubmeter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("nome", nomePrato);
    formData.append("descricao", descricao);
    formData.append("tag", tag);
    formData.append("restaurante", restaurante);
    if (imagem) {
      formData.append("imagem", imagem);
    }

    http
      .request({
        url: "pratos/",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      })
      .then((r) => {
        setNomePrato("");
        setDescricao("");
        setTag("");
        setRestaurante("");
        console.log(r.data);
      })
      .catch((e) => console.log(e));
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
        Formulário de Pratos
      </Typography>
      <Box component="form" sx={{ width: "100%" }} onSubmit={aoSubmeter}>
        <TextField
          value={nomePrato}
          onChange={(event) => setNomePrato(event.target.value)}
          label="Nome do Prato"
          variant="standard"
          fullWidth
          required
          margin="dense"
        />
        <TextField
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          label="Descrição do Prato"
          variant="standard"
          fullWidth
          required
          margin="dense"
        />

        <FormControl margin="dense" fullWidth>
          <InputLabel id="select-tag">Tag</InputLabel>
          <Select
            labelId="select-tag"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          >
            {tags.map((tag) => (
              <MenuItem key={tag.id} value={tag.value}>
                {tag.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <InputLabel id="select-restaurante">Restaurante</InputLabel>
          <Select
            labelId="select-restaurante"
            value={restaurante}
            onChange={(event) => setRestaurante(event.target.value)}
          >
            {restaurantes.map((restaurante) => (
              <MenuItem key={restaurante.id} value={restaurante.id}>
                {restaurante.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <input type="file" onChange={selecionarArquivo} />

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

export default FormularioPrato;
