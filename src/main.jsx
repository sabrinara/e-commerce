import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Shared/Home/Home';
import Root from './component/layout/Root';
import Error from './component/layout/Error';
import AllProducts from './component/Pages/AllProducts';
import Carts from './component/Pages/Carts';
import Login from './component/Pages/Login';
import Registration from './component/Pages/Registration';
import ProductDetails from './component/Pages/ProductDetails';
import DashboardLayout from './component/layout/DashboardLayout';
import CustomerList from './component/Pages/Dashboard/CustomerList';
import AddCustomer from './component/Pages/Dashboard/AddCustomer';
import AddProducts from './component/Pages/Dashboard/AddProducts';
import ProductList from './component/Pages/Dashboard/ProductList';
import OrderList from './component/Pages/Dashboard/OrderList';
import Dashboard from './component/Pages/Dashboard/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/products.json')
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
        loader: () => fetch('/products.json')
      },
      {
        path: "/allProducts/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/products.json')
      },
      {
        path: "/carts",
        element: <Carts></Carts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
     
      {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard></Dashboard>,
          },
          {
            path: 'dashboard/addCustomer',
            element: <AddCustomer></AddCustomer>,
          },
          {
            path: 'dashboard/addProducts',
            element: <AddProducts></AddProducts>,
          },
          {
            path: 'dashboard/customerList',
            element: <CustomerList></CustomerList>,
          },
          {
            path: 'dashboard/productList',
            element: <ProductList></ProductList>,
          },
          {
            path: 'dashboard/orderList',
            element: <OrderList></OrderList>,
          }
        ]
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
