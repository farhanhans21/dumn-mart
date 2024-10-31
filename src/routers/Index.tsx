import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../auth/components/Layout";
import Login from "../auth/components/Login";
import Register from "../auth/components/Register";
import Product from "../user/components/Product";
import LayoutUser from "../user/components/layouts/LayoutUser";
import DetailProduk from "../user/components/DetailProduk";
import Profile from "../user/components/ProfileUser";
import ProductDetail from "../user/components/ProductDetail";
import LayoutAdmin from "../admin/components/layout/LayoutAdmin";
import EditCategory from "../admin/components/EditCategory";
import ListCategory from "../admin/components/list/ListCategory";
import EditProduct from "../admin/components/EditProduct";
import LayoutComplain from "../complain/layout/LayoutComplain";
import ListProduct from "../admin/components/list/ListProduct";
import DashboardLayout from "../admin/components/DashboardLayout";

export function AppRouter() {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: <LayoutUser />,
      children: [
        {
          index: true,
          element: <Product />,
        },
        { path: "product-user", element: <DetailProduk /> },
        {
          path: "profile-user",
          element: <Profile />,
        },
        {
          path: "complain",
           element:<LayoutComplain/>,
        },
        {
          path:"product-detail",
          element:<ProductDetail />
        }
      ],
    },
    {
      element:<LayoutAdmin/>,
      children:[
        {
          index:true,
          element: <DashboardLayout/>
        },
        {
            path:"list-category",
            element:<ListCategory/>

          },
          {
            path: "list-products",
            element: <ListProduct/>
          },
          {
            path: "edit-product",
            element: <EditProduct/>
          },
          {
            path:'edit-category',
            element:<EditCategory/>
          },
      ]
    }
  ]);
  return <RouterProvider router={routers} />;
}
