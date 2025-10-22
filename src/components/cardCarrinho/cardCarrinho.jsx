import Button from '../button/button';
import { useCarrinho } from '../../contexts/CarrinhoContext.jsx';
import Item from '../item/item.jsx';

export default function CardCarrinho({ itensCarrinho }) {
    const { limparCarrinho, total } = useCarrinho();
    console.log(itensCarrinho);
    return (
        <div className="container">
            <h3>Carrinho</h3>
            <div className="card bg-light p-3 mt-2">
                <p><strong>Itens:</strong> {itensCarrinho.length}</p>
                <p><strong>Total:</strong> R$ {total}</p>

                <div className="list-group mb-3">
                    {/* {itensCarrinho.map(item => (
                        <Item
                            key={item.id}
                            imagem={`https://placehold.co/60x60/000000/FFFFFF/png/?text=${item.nome}`}
                            nome={item.nome}
                            valor={item.valor}
                        />
                    ))} */}
                </div>

                <Button className="btn btn-danger btn-sm" onClick={limparCarrinho}>Limpar</Button>
            </div>
        </div>
    );
}