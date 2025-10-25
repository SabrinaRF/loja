import { useCarrinho } from '../../hooks/useCarrinho.js';
import Item from '../item/item.jsx';

export default function CardCarrinho({ itensCarrinho }) {
    const { total } = useCarrinho();
    console.log(itensCarrinho);
    return (
        <div className="card-body">
            <div className="mb-3">
                <p className="card-text mb-0"><strong>Itens:</strong> {itensCarrinho.length}</p>
                <p className="card-text"><strong>Total:</strong> R$ {Number(total).toFixed(2)}</p>
            </div>

            <div className="list-group">
                {itensCarrinho.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}