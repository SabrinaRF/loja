import Header from '../../components/header/Header.jsx';
import ListarProd from '../../components/produto/ListarProd.jsx';
import Footer from '../../components/footer/Footer.jsx';
import MenuCarrinho from '../../components/menuCarrinho/MenuCarrinho.jsx';
import {useCarrinho} from '../../hooks/useCarrinho.js';

export default function Loja() {
	const {carrinho, produtos} = useCarrinho();

	return (
		<main>
			<Header nome="Minha Loja" />
			<MenuCarrinho
				valor={carrinho.reduce((acc, item) => acc + item.quantidade, 0)}
			/>
			<div className="container mt-4">
				<ListarProd produtos={produtos} />
			</div>
			<Footer nome="Direitos Autorais. 2025." />
		</main>
	);
}
