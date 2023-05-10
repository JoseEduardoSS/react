import { StyledHeader } from "./styles";
import { Outlet } from "react-router-dom";

const DefaultPage = () => {
  return (
    <>
      <StyledHeader>
        <div>A casa do código e da massa</div>
      </StyledHeader>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultPage;
