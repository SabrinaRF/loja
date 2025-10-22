import Header from '../../components/header/header.jsx';
import ListProd from '../../components/produto/listarProd.jsx';
import Footer from '../../components/footer/footer.jsx'
import MenuCarrinho from '../../components/menuCarrinho/menuCarrinho.jsx';
import { useCarrinho } from '../../contexts/CarrinhoContext.jsx';
export default function Loja() {
    const { carrinho } = useCarrinho();

    const produtos = [
        { id: 1, titulo: "Prod 1", valor: 100, estrelas: 5 },
        { id: 2, titulo: "Prod 2", valor: 100, estrelas: 4 },
        { id: 3, titulo: "Prod 3", valor: 100, estrelas: 3 },
        { id: 4, titulo: "Prod 4", valor: 200, estrelas: 4 },
        { id: 5, titulo: "Prod 5", valor: 300, estrelas: 5 },
    ];

    return (
        <main>
            <Header nome="Minha Loja" />
            <MenuCarrinho valor={carrinho.length} />
            <ListProd produtos={produtos} />
            <Footer nome="Direitos Autorais. 2025." />
        </main>
    );
}