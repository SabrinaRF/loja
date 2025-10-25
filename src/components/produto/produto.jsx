import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import {useCarrinho} from '../../hooks/useCarrinho';

export default function Produto({produto}) {
	const {adicionarItem} = useCarrinho();

	return (
		<Card style={{width: '12rem', marginBottom: '1rem', marginTop: '2rem'}}>
			<Card.Img
				variant="top"
				src={`https://placehold.co/60x60/000000/FFFFFF/png/?text=${produto.titulo}`}
			/>
			<Card.Body>
				<Card.Title>{produto.titulo}</Card.Title>
				<Card.Text>
					<strong>
						<h6> R$ {produto.valor}</h6>
					</strong>
					{Array.from({length: 5}, (_, i) => (
						<svg
							width="16"
							height="16"
							fill={i < produto.estrelas ? 'gold' : 'lightgray'}
							className="bi bi-star"
							viewBox="0 0 16 16"
							style={{marginRight: '3px'}}
						>
							<path
								d="M2.886 14.85c-.078.444.36.791.746.593l4.39-2.256 
                       4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 
                       3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792
                       a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696
                       c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767
                       -3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745
                       l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658
                       a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77
                       a.56.56 0 0 0-.163.506l.694 3.957
                       -3.686-1.894a.5.5 0 0 0-.461 0z"
							/>
						</svg>
					))}
				</Card.Text>
				<button
					type="button"
					onClick={() => adicionarItem(produto)}
					className="btn btn-success"
				>
					Comprar
				</button>
				<Link to={`/produto/${produto.id}`}>
					<button type="button" class="btn btn-success">
						Visualizar Produto
					</button>
				</Link>
			</Card.Body>
		</Card>
	);
}
