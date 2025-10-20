import { createRoot } from 'react-dom/client'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
