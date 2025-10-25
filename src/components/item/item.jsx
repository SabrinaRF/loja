import Button from '../button/Button';
import {useCarrinho} from '../../hooks/useCarrinho';

export default function Item({item}) {
	const {removerItem, editarQuantidade} = useCarrinho();

	return (
		<div className="list-group-item d-flex align-items-center justify-content-between py-3">
			<div className="d-flex align-items-center gap-3">
				<img
					src={`https://placehold.co/60x60/000000/FFFFFF/png/?text=${item.titulo}`}
					alt={item.titulo}
					className="rounded-circle"
					style={{width: 60, height: 60, objectFit: 'cover'}}
				/>
				<div>
					<h6 className="mb-1">{item.titulo}</h6>
					<small>R$ {item.valor}</small>
				</div>
			</div>

			<div className="d-flex align-items-center gap-2">
				<button
					className="btn btn-outline-secondary btn-sm"
					onClick={() =>
						editarQuantidade(item.id, Math.max(1, item.quantidade - 1))
					}
					disabled={item.quantidade === 1}
					aria-label="Diminuir quantidade"
				>
					-
				</button>

				<span className="px-2">{item.quantidade}</span>

				<button
					className="btn btn-outline-secondary btn-sm"
					onClick={() => editarQuantidade(item.id, item.quantidade + 1)}
					aria-label="Aumentar quantidade"
				>
					+
				</button>

				<button
					className="btn btn-danger btn-sm"
					onClick={() => removerItem(item.id)}
				>
					Excluir
				</button>
			</div>
		</div>
	);
}
