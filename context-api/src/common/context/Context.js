import {createContext, useContext, useState} from 'react';

export const Context = createContext();
Context.displayName = "Contexto";

export const ContextProvider = ({children}) => {
    const [nome, setNome] = useState("");
    const [saldo, setSaldo] = useState(0);
    const [carrinho, setCarrinho] = useState([]);

    return (
        <Context.Provider value={{nome, setNome, saldo, setSaldo, carrinho, setCarrinho}}>
            {children}
        </Context.Provider>
    )
}

export const useUsuarioContext = () => {
    const {nome, setNome, saldo, setSaldo} = useContext(Context);
    return {nome, setNome, saldo, setSaldo};
}

export const useCarrinhoContext = () => {
    const {carrinho, setCarrinho} = useContext(Context);

    function addProduto(novoProduto) {
        const existeProduto = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id);
        if (!existeProduto) {
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
        }
        setCarrinho(carrinhoAtual => carrinhoAtual.map(itemCarrinho => {
            if (itemCarrinho.id === novoProduto.id) itemCarrinho.quantidade++;
            return itemCarrinho;
        }))
    }

    return {carrinho, setCarrinho, addProduto}
}