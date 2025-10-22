import CardCarrinho from '../../components/cardCarrinho/cardCarrinho.jsx';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx'
import Button from '../../components/button/button.jsx';
import { useNavigate } from 'react-router-dom';

export default function Carrinho() {
    const navigate = useNavigate();

    const itensCarrinho = [
        { id: 1, nome: 'Prod 1', valor: 50 },
        { id: 2, nome: 'Prod 2', valor: 100 },
        { id: 3, nome: 'Prod 3', valor: 200 }
    ];

    return (
        <main>
            <Header nome="Minha Loja" />
            <Button texto="Carrinho" onClick={() => navigate("/")} />
            <CardCarrinho
                itensCarrinho={itensCarrinho}
            />
            <Footer nome="Direitos Autorais. 2025." />
        </main>
    );
}