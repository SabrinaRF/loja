import { createBrowserRouter } from 'react-router-dom';
import Loja from '../pages/loja/loja.jsx';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Loja />
    }
]);
