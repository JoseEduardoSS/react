import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext(undefined);
Context.displayName = "Contexto";

export const ContextProvider = ({ children }) => {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [carrinho, setCarrinho] = useState([]);
  const [qtdProdutos, setQtdProdutos] = useState(0);
  const tiposPagamento = [
    { id: 1, nome: "boleto", juros: 1 },
    { id: 2, nome: "cartão de crédito", juros: 1.3 },
    { id: 3, nome: "pix", juros: 1 },
    { id: 4, nome: "crediário", juros: 1.5 },
  ];
  const [formaPagamento, setFormaPagamento] = useState(tiposPagamento[0]);

  return (
    <Context.Provider
      value={{
        nome,
        setNome,
        saldo,
        setSaldo,
        carrinho,
        setCarrinho,
        qtdProdutos,
        setQtdProdutos,
        formaPagamento,
        setFormaPagamento,
        tiposPagamento,
      }}
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
  const { carrinho, setCarrinho, qtdProdutos, setQtdProdutos } =
    useContext(Context);

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
    const ultimo = produto.quantidade === 1;
    if (ultimo) {
      return setCarrinho((carrinhoAtual) =>
        carrinhoAtual.filter((itemCarrinho) => itemCarrinho.id !== id)
      );
    }
    return setCarrinho(mudaQtd(id, -1));
  }

  useEffect(() => {
    const qtdProdutos = carrinho.reduce(
      (contador, produto) => contador + produto.quantidade,
      0
    );
    setQtdProdutos(qtdProdutos);
  }, [carrinho, setQtdProdutos]);

  return {
    carrinho,
    setCarrinho,
    addProduto,
    removeProduto,
    qtdProdutos,
    setQtdProdutos,
  };
};

export const usePagamentoContext = () => {
  const { tipoPagamento, formaPagamento, setFormaPagamento } =
    useContext(Context);
  return { tipoPagamento, formaPagamento, setFormaPagamento };
};
