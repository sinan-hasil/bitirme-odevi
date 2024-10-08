import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { AllProducts, Contact, Login, Mainpage, Root, SSS } from './pages';
import { fetchbestSellers } from './pages/components/Product';
import { fetchAllProducts } from './pages/AllProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Mainpage />,
        loader: fetchbestSellers,
      },
      {
        path: "/allProducts",
        element: <AllProducts />, 
        loader: fetchAllProducts,
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
    <RouterProvider router={router} />
)
