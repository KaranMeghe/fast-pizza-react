import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout, Home, Error } from './ui';
import { CreateOrder, Menu, Cart, Order, menuLoader, orderLoader } from './features/index';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu', element: <Menu />, loader: menuLoader, errorElement: <Error />
      },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      { path: '/order/:orderId', element: <Order />, loader: orderLoader, errorElement: <Error /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
