import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Pages/Home/Home.jsx';
import AddProduct from './components/Pages/AddProduct/AddProduct.jsx';
import InsertCardProducts from './components/InsertCardProducts/InsertCardProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        errorElement:<ErrorPage></ErrorPage>,
        loader:()=>fetch('http://localhost:5000/cards')
      

        
    },
    {
      path:'/addproduct',
      element:<AddProduct></AddProduct>
    },
    {
      path:'insertcardproducts',
      element:<InsertCardProducts></InsertCardProducts>
    }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
