import {Nav} from "./styles";
import {ReactComponent as Logo} from "assets/logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {useCarrinhoContext} from "../../../common/context/Context";
import {useNavigate} from "react-router-dom";

export default function NavBar() {
  const {qtdProdutos} = useCarrinhoContext();
  const navigate = useNavigate();
  return (
    <Nav>
      <Logo/>
      <IconButton disabled={qtdProdutos === 0}
      onClick={() => navigate("/carrinho")}>
        <Badge color="primary" badgeContent={qtdProdutos}>
          <ShoppingCartIcon/>
        </Badge>
      </IconButton>
    </Nav>
  );
}
