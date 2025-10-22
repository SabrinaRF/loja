import CardCarrinho from '../../components/cardCarrinho/cardCarrinho.jsx';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx'
import MenuCarrinho from '../../components/menuCarrinho/menuCarrinho.jsx';
import { useNavigate } from 'react-router-dom';
import { useCarrinho } from '../../contexts/CarrinhoContext.jsx';
import Button from '../../components/button/button.jsx';

export default function Carrinho() {
    const navigate = useNavigate();
    const { carrinho } = useCarrinho();

    return (
        <main>
            <Header nome="Minha Loja" />
            <MenuCarrinho valor={2} />
            <Button texto="Voltar para Loja" onClick={() => navigate("/")} />
            <CardCarrinho
                itensCarrinho={carrinho}
            />
            <Footer nome="Direitos Autorais. 2025." />
        </main>
    );
}