import Header from '../../components/header/header.jsx';
import ListProd from '../../components/produto/listarProd.jsx';
import Footer from '../../components/footer/footer.jsx'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.jsx';
import produtos from '../../data/produto.js';
export default function Loja() {
    const navigate = useNavigate();

    return (
        <main>
            <Header nome="Minha Loja" />
            <Button texto="Carrinho" onClick={() => navigate("/carrinho")} />
            <ListProd produtos={produtos} />
            <Footer nome="Direitos Autorais. 2025." />
        </main>
    );
}