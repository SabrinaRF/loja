import Carrinho from '../../components/carrinho/carrinho.jsx';
import Header from '../../components/header/header.jsx';
import ListProd from '../../components/produto/listarProd.jsx';
export default function Loja() {

    const itensCarrinho = [
        { id: 1, nome: 'Prod 1', valor: 50 },
        { id: 2, nome: 'Prod 2', valor: 100 },
        { id: 3, nome: 'Prod 3', valor: 200 }
    ];
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
            <Carrinho
                itensCarrinho={itensCarrinho}
            />
            <ListProd produtos={produto}/>

        </main>
    );
}