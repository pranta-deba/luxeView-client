import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ProductDetails from "../pages/Details/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <div>Error</div>,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/details/:id",
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ],
    },
]);