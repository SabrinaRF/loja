import React from 'react';
import {Link} from 'react-router-dom';
export default function NotFound() {
	return (
		<div className="notfound-container">
			<h1>404</h1>
			<h2>Página não encontrada</h2>
			<p>A página que você está procurando não existe ou foi removida</p>
			<Link to="/"> Voltar para a tela iniical </Link>
		</div>
	);
}
