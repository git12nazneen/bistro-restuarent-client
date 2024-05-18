import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Error from '../Components/Error';
import Menu from '../Pages/MenuPage/Menu';
import Shop from '../Pages/ShopPage/Shop';
import Contact from '../Pages/Contact/Contact';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <Error />,
      children:[
        {
            path:'/home',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/shop',
          element:<Shop></Shop>
        },{
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    },
  ]);

export default router;