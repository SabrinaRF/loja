import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Loja from '../pages/loja/loja.jsx';
import Carrinho from '../pages/carrinho/carrinho.jsx';
import NotFound from '../components/NotFound/NotFound.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Loja />
    },
    {
        path: '/carrinho',
        element: <Carrinho />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
