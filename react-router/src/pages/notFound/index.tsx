import NotFoundImage from "../../assets/notFoundImage";
import { Back, Container } from "./styles";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Back>
        <button onClick={() => navigate(-1)}>{"< Voltar"}</button>
      </Back>
      <NotFoundImage />
    </Container>
  );
};

export default NotFound;
