import React from 'react'
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Home from '../pages/Home';
import About from '../pages/About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
      ,
      errorElement: <ErrorPage />
    },
    {
        path:'/login',
        element:<Login/>
    },

    {
        path:'/about',
        element:<About/>
    },
    
  ]);
  

function Router() {
  return (

          <RouterProvider router={router} />
 
  )
}

export default Router
