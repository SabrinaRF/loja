import {createBrowserRouter, Route, Routes} from 'react-router-dom';
import Loja from '../pages/loja/loja.jsx';
import Carrinho from '../pages/carrinho/carrinho.jsx';
import NotFound from '../pages/notFound/notFound.jsx';
import PaginaProduto from '../components/produto/paginaProduto.jsx';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Loja />,
		},
		{
			path: '/carrinho',
			element: <Carrinho />,
		},
		{
			path: '*',
			element: <NotFound />,
		},
		{
			path: '/produto/:id',
			element: <PaginaProduto />,
		},
	],
	{
		basename: '/loja/',
	},
);
