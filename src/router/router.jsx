import { createBrowserRouter } from 'react-router-dom';
import Loja from '../pages/loja/loja.jsx';
import Carrinho from '../pages/carrinho/carrinho.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Loja />
    },
    {
        path: '/carrinho',
        element: <Carrinho />
    }
]);
