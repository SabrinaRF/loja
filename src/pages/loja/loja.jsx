import Carrinho from '../../components/carrinho/carrinho.jsx';
import Header from '../../components/header/header.jsx';

import Produto from "../../components/produto/produto";
export default function Loja () {
    
    const itensCarrinho = [
        { id: 1, nome: 'Prod 1', valor: 50 },
        { id: 2, nome: 'Prod 2', valor: 100 },
        { id: 3, nome: 'Prod 3', valor: 200 }
    ];
    return (
        <main>
            <Header nome="Minha Loja" /> 
            <h2>Carrinho</h2>
            <Carrinho
                itensCarrinho={itensCarrinho}
            />
        
        <div className="container">
            <Produto
                imagem={<img  alt="Imagem"  src="https://placehold.co/300x200/black/white/png/?text=prod 1"/>}
                titulo={"prod 1"} 
                valor={100} 
                estrela1
                estrela2
                estrela3
                estrela4
                estrela5
                />
        </div>

        </main>
    );
}