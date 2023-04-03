import { createContext, useContext, useState } from "react";

export const Context = createContext(undefined);
Context.displayName = "Contexto";

export const ContextProvider = ({ children }) => {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [carrinho, setCarrinho] = useState([]);

  return (
    <Context.Provider
      value={{ nome, setNome, saldo, setSaldo, carrinho, setCarrinho }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUsuarioContext = () => {
  const { nome, setNome, saldo, setSaldo } = useContext(Context);
  return { nome, setNome, saldo, setSaldo };
};

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho } = useContext(Context);

  function mudaQtd(id, quantidade) {
    return carrinho.map((itemCarrinho) => {
      if (itemCarrinho.id === id) itemCarrinho.quantidade += quantidade;
      return itemCarrinho;
    });
  }

  function addProduto(novoProduto) {
    const existeProduto = carrinho.some(
      (itemCarrinho) => itemCarrinho.id === novoProduto.id
    );
    if (!existeProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho((carrinhoAtual) => [...carrinhoAtual, novoProduto]);
    }
    setCarrinho(mudaQtd(novoProduto.id, 1));
  }

  function removeProduto(id) {
    const produto = carrinho.find((itemCarrinho) => itemCarrinho.id === id);
    if (!produto) {
      return;
    }
    const ultimo = produto.quantidade === 1;
    if (ultimo) {
      return setCarrinho((carrinhoAtual) =>
        carrinhoAtual.filter((itemCarrinho) => itemCarrinho.id !== id)
      );
    }
    return setCarrinho(mudaQtd(id, -1));
  }

  return { carrinho, setCarrinho, addProduto, removeProduto };
};
