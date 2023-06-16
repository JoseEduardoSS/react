import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";
import http from "../../../http";

const FormularioRestaurante = () => {
  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (params.id) {
      http
        .get<IRestaurante>(`restaurantes/${params.id}/`)
        .then((response) => setNomeRestaurante(response.data.nome))
        .catch((error) => console.log(error));
    }
  }, [params]);

  const [nomeRestaurante, setNomeRestaurante] = useState<string>("");

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
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6">Administração</Typography>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <Link component={RouterLink} to="/admin/restaurantes">
                <Button sx={{ my: 2, color: "white" }}>Restaurantes</Button>
              </Link>
              <Link component={RouterLink} to="/admin/restaurantes/novo">
                <Button sx={{ my: 2, color: "white" }}>Novo Restaurante</Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: 1
              }}
            >
              <Typography component="h1" variant="h6">
                Formulário de Restaurantes
              </Typography>
              <Box component="form" sx={{width: '100%'}} onSubmit={aoSubmeter}>
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
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default FormularioRestaurante;
