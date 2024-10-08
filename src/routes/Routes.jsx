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
import UserProfile from "../pages/UserProfile/UserProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <div>Error</div>,
        children: [
            { path: "/", element: <Home /> },
            { path: "/products", element: <Private><AllProducts /></Private> },
            { path: "/cart", element: <Private><Cart /></Private> },
            { path: "/profile", element: <Private><UserProfile /></Private> },
            { path: "/about", element: <AboutUs /> },
            { path: "/contact", element: <ContactUs /> },
            {
                path: "/details/:id",
                element: <Private><ProductDetails /></Private>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`)
            },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ],
    },
]);