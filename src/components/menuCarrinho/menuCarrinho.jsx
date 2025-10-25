import {Link} from 'react-router-dom';

export default function MenuCarrinho({valor}) {
	return (
		<div className="bg-success text-white py-3 mb-4 flex items-center justify-center gap-2">
			<Link to="/carrinho" className="text-white text-decoration-none">
				<h1 className="m-0">🛒 Carrinho ( {valor} )</h1>
			</Link>
		</div>
	);
}
