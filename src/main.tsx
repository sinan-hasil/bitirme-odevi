import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { AllProducts, Contact, Login, Mainpage, ProductDetail, Root, SSS } from './pages';
import { fetchbestSellers } from './pages/components/Product';
import { fetchAllProducts } from './pages/AllProducts';
import { fetchProductDetail } from './pages/ProductDetail';

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
        path: "allProducts/:id",
        element: <ProductDetail />,
        loader: fetchProductDetail,
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
