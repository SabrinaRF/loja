import {createRoot} from 'react-dom/client';
import {router} from './router/router';
import {RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './index.css';
import {CarrinhoProvider} from './contexts/CarrinhoContext.jsx';

createRoot(document.getElementById('root')).render(
	<CarrinhoProvider>
		<RouterProvider router={router} />
	</CarrinhoProvider>,
);
