import Item from '../item/item.jsx';

export default function Carrinho({itensCarrinho}) {

    const soma = itensCarrinho.reduce((acc, valor) => acc + valor.valor, 0);
    return (
        <section>
            <p>Itens:{itensCarrinho.length}</p>
            <p>Total: R$ {soma}</p>
            {itensCarrinho.map(item => (
                <Item key={item.id}
                    nome={item.nome}
                    valor={item.valor}
                />
            ))
            }
        </section>
    );
}