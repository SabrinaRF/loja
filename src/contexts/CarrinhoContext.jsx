import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarItem = (produto) => {
        setCarrinho((prev) => {
            const existe = prev.find((item) => item.id === produto.id);
            if (existe) {
                return prev.map((item) =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            }
            return [...prev, { ...produto, quantidade: 1 }];
        });
    };

    const removerItem = (id) => {
        setCarrinho((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
                .filter((item) => item.quantidade > 0)
        );
    };

    const limparCarrinho = () => setCarrinho([]);

    const total = carrinho.reduce(
        (acc, item) => acc + item.valor * item.quantidade,
        0
    );

    return (
        <CarrinhoContext.Provider
            value={{ carrinho, adicionarItem, removerItem, limparCarrinho, total }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}
