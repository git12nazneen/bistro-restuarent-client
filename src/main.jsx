import React from 'react'
import ReactDOM from 'react-dom/client'
import {HelmetProvider } from 'react-helmet-async';
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster /> 
     </HelmetProvider>
      </AuthProvider>
  </React.StrictMode>,
)
