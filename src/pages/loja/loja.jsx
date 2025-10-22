import Header from '../../components/header/header.jsx';
import ListProd from '../../components/produto/listarProd.jsx';
import Footer from '../../components/footer/footer.jsx'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.jsx';
export default function Loja() {
    const navigate = useNavigate();

    const produto = [
        {
            id: 1,
            titulo: "Prod 1",
            valor: 100,
            estrelas: 5
        },
        {
            id: 2,
            titulo: "Prod 2",
            valor: 100,
            estrelas: 4
        },

        {
            id: 3,
            titulo: "Prod 3",
            valor: 100,
            estrelas: 3
        },

        {
            id: 4,
            titulo: "Prod 4",
            valor: 200,
            estrelas: 4
        },
        {
            id: 5,
            titulo: "Prod 5",
            valor: 300,
            estrelas: 5
        },
    ]
    return (
        <main>
            <Header nome="Minha Loja" />
            <Button texto="Carrinho" onClick={() => navigate("/carrinho")} />
            <ListProd produtos={produto} />
            <Footer nome="Direitos Autorais. 2025." />
        </main>
    );
}