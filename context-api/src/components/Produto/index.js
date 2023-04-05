import { Container } from "./styles";
import { memo } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useCarrinhoContext } from "../../common/context/Context";

function Produto({ nome, foto, id, valor, unidade }) {
  const { carrinho, addProduto, removeProduto } = useCarrinhoContext();
  const produtoCarrinho = carrinho.find(
    (intemCarrinho) => intemCarrinho.id === id
  );
  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton disabled={!produtoCarrinho} color="secondary" onClick={() => removeProduto(id)}>
          <RemoveIcon />
        </IconButton>
        {produtoCarrinho?.quantidade || 0}
        <IconButton
          color="primary"
          onClick={() => addProduto({ nome, foto, id, valor })}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);
