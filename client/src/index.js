import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Home from "./views/Home/Home"
import Services from './views/Services/Services';
import About from "./views/About/About";
import AddProduct from "./views/AddProduct/AddProduct"
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login"

const router = createBrowserRouter([{
  path: '/',
  element:<Home/>
},
{
  path: '/about',
  element :<About/> 
},
{
  path: '/addproduct',
  element :<AddProduct/> 
},
{
  path: '/services',
  element: <Services/>
},
{
  path: '/signup',
  element: <Signup />
},
{
  path: '/login',
  element: <Login/>
}

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

