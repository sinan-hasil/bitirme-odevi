import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {AllProducts, Contact, Login, Mainpage, Root, SSS} from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Mainpage />
      },
      {
        path: "/allProducts",
        element: <AllProducts />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/faq",
        element: <SSS />
      }, 
      {
        path: "/login",
        element: <Login />
      }     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
