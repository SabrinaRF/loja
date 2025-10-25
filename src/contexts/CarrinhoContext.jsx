import {createContext, useEffect, useState} from 'react';
import produtosData from '../data/db.json';

const CarrinhoContext = createContext();

export function CarrinhoProvider({children}) {
	const [carrinho, setCarrinho] = useState([]);
	const [produtos, setProdutos] = useState([]);

	useEffect(() => {
		carregarProdutos();
	}, []);

	function carregarProdutos() {
		setProdutos(produtosData);
	}

	const adicionarItem = (produto) => {
		setCarrinho((prev) => {
			const existe = prev.find((item) => item.id === produto.id);
			if (existe) {
				return prev.map((item) =>
					item.id === produto.id
						? {...item, quantidade: item.quantidade + 1}
						: item,
				);
			}
			return [...prev, {...produto, quantidade: 1}];
		});
	};

	const editarQuantidade = (id, novaQuantidade) => {
		setCarrinho((prev) =>
			prev.map((item) =>
				item.id === id ? {...item, quantidade: novaQuantidade} : item,
			),
		);
	};

	const removerItem = (id) => {
		setCarrinho((prev) =>
			prev
				.map((item) =>
					item.id === id ? {...item, quantidade: item.quantidade - 1} : item,
				)
				.filter((item) => item.quantidade > 0),
		);
	};

	const limparCarrinho = () => setCarrinho([]);

	const total = carrinho.reduce(
		(acc, item) => acc + item.valor * item.quantidade,
		0,
	);

	const finalizarCompra = () => {
		if (carrinho.length === 0) {
			alert('O carrinho está vazio!');
			return;
		}
		alert('Compra finalizada com sucesso! Obrigado pela preferência 😊');
		limparCarrinho();
	};

	return (
		<CarrinhoContext.Provider
			value={{
				carrinho,
				produtos,
				adicionarItem,
				removerItem,
				editarQuantidade,
				limparCarrinho,
				finalizarCompra,
				total,
			}}
		>
			{children}
		</CarrinhoContext.Provider>
	);
}

export {CarrinhoContext};
