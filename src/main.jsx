import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, { action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, { loader as clientesLoader } from './pages/Index'
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction }from './pages/EditarCliente'
import ErrorPage from './components/ErrorPage'
import { action as eliminarClienteAction } from './components/Cliente'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children:[
      { // Pagina principal
        index: true, // Esto sirve por si creamos un element con un <h1>, se muestre en la pagina principal
        element: <Index/>,
        loader: clientesLoader, // para obtener los clientes
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction, // para crea un nuevo cliente
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader, // para obtener el cliente
        action:editarClienteAction, // para pasar los nuevos datos que han ingresado al formulario
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
