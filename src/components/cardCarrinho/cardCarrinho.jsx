import Item from '../item/item.jsx';

export default function CardCarrinho({ itensCarrinho }) {

    const soma = itensCarrinho.reduce((acc, valor) => acc + valor.valor, 0);
    return (
        <div className="container">
            <h3>Carrinho</h3>
            <div className="card bg-light p-3 mt-2">
                <p><strong>Itens:</strong> {itensCarrinho.length}</p>
                <p><strong>Total:</strong> R$ {soma}</p>

                <div className="list-group mb-3">
                    {itensCarrinho.map(item => (
                        <Item
                            key={item.id}
                            imagem={`https://placehold.co/100x60/000000/FFFFFF/png/?text=${item.nome}`}
                            nome={item.nome}
                            valor={item.valor}
                        />
                    ))}
                </div>

                <button className="btn btn-danger btn-sm">Limpar</button>
            </div>
        </div>
    );
}