import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Loja from '../pages/loja/loja.jsx';
import NotFound from '../components/NotFound/NotFound.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Loja />
    },

    {
        path: '*',
        element: <NotFound />
    }
]);
