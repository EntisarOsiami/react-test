import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from '../pages/HomePage';
import Layout from '../layout/Layout';
import Login from '../components/Login';
import Register from '../components/Register';
import DetailsPage from '../pages/detailsPage';
import CartPage from '../pages/CartPage';

function AppRoutes() {
  const AppRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        { path: '/register', element: <Register /> },
        { path: 'DetailsPage/:id', element: <DetailsPage /> },
        {path:'/cart/:id', element: <CartPage/>}
      ],
    },
  ]);

  return <RouterProvider router={AppRoutes} />;
}

export default AppRoutes;
