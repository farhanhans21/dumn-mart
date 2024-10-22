
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from '../auth/components/Layout';
import Login from '../auth/components/Login';
import Register from '../auth/components/Register';

export function AppRouter(){
  const routers = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children: [
        {index: true, element: <Login/>},
        {path: '/register', element: <Register/>},
      ]

  }
]);
return <RouterProvider router={routers} />;
}