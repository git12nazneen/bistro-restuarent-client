import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Error from '../Components/Error';
import Menu from '../Pages/MenuPage/Menu';
import Shop from '../Pages/ShopPage/Shop';
import Login from '../Pages/Contact/Login';
import SignUp from '../Pages/Contact/SignUp';
import Secret from '../Components/Secret';
import PrivateRoute from '../providers/PrivateRoute';
import Cart from '../Pages/Dashboard/cart/Cart';
import Dashboard from '../Components/Dashboard';
import AllUsers from '../Pages/Dashboard/AllUsers';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <Error />,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/shop/:category',
          element:<Shop></Shop>
        },{
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        // admin route
        {
          path:'users',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);

export default router;