import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
import { AppLayout, Home } from './ui';
import { CreateOrder, Menu, Cart, Order } from './features/index';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      { path: '/order/orderId', element: <Order /> },
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
