import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ProductDetails from "../pages/Details/ProductDetails";
import Private from "./Private";
import AllProducts from "../pages/AllProducts/AllProducts";
import Cart from "../pages/Cart/Cart";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <div>Error</div>,
        children: [
            { path: "/", element: <Home /> },
            { path: "/products", element: <Private><AllProducts /></Private> },
            { path: "/cart", element: <Private><Cart /></Private> },
            { path: "/about", element: <AboutUs /> },
            { path: "/contact", element: <ContactUs /> },
            {
                path: "/details/:id",
                element: <Private><ProductDetails /></Private>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ],
    },
]);