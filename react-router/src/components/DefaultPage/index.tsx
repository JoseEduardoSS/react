import { StyledHeader } from "./styles";
import { Outlet } from "react-router-dom";
import { Container } from "../../UI/theme";

const DefaultPage = () => {
  return (
    <>
      <StyledHeader>
        <div>A casa do código e da massa</div>
      </StyledHeader>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default DefaultPage;
