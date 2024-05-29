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
import AddItems from '../Pages/Dashboard/AddItems';
import AdminRoute from '../Components/AdminRoute';
import ManageItems from '../Pages/Dashboard/ManageItems';
import UpdateItem from '../Pages/Dashboard/UpdateItem';
import Payment from '../Pages/Dashboard/Payment/Payment';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory';
import UserHome from '../Pages/Dashboard/userHome/UserHome';
import AdminHome from '../Pages/Dashboard/adminHome/AdminHome';
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
        // normal user routes
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        // admin route
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        }
        ,{
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
       {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
       },
       {
        path:'updatedItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params})=> fetch(`http://localhost:5000/menu/${params.id}`) 
       }
      ]
    }
  ]);

export default router;