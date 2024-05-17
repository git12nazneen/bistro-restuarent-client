import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Error from '../Components/Error';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <Error />,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router;