import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditCategory from "../admin/components/EditCategory";
import EditProduct from "../admin/components/EditProduct";
import LayoutAdmin from "../admin/components/layout/LayoutAdmin";
import ListCategory from "../admin/components/list/ListCategory";
import ListProduct from "../admin/components/list/ListProduct";
import Layout from "../auth/components/Layout";
import Login from "../auth/components/Login";
import Register from "../auth/components/Register";
import LayoutComplain from "../complain/layout/LayoutComplain";
import Cart from "../user/components/Cart";
import DetailProduk from "../user/components/DetailProduk";
import EditProfile from "../user/components/EditProfile";
import LayoutUser from "../user/components/layouts/LayoutUser";
import Product from "../user/components/Product";
import ProductDetail from "../user/components/ProductDetail";
import Profile from "../user/components/ProfileUser";
import ProtectedRoute from "./router";

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
      element: <ProtectedRoute role={"USER"} />,
      children: [
        {
          element: <LayoutUser />,
          children: [
            {
              path: "/",
              element: <Product />,
            },
            { path: "product-user", element: <DetailProduk /> },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "complain",
              element: <LayoutComplain />,
            },
            {
              path: "product-detail",
              element: <ProductDetail />,
            },
            {
              path: "edit-profile",
              element: <EditProfile />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
          ],
        },
      ],
    },
    {
      element: <ProtectedRoute role={"ADMIN"} />,
      children: [
        {
          element: <LayoutAdmin />,
          children: [
            {
              path: "/admin",
              element: <ListCategory />,
            },
            {
              path: "list-products",
              element: <ListProduct />,
            },
            {
              path: "edit-product/:id",
              element: <EditProduct />,
            },
            {
              path: "edit-category/:id",
              element: <EditCategory />,
            },
            {
              path: "complain",
              element: <LayoutComplain />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}
