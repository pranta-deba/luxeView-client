import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import useAuth from "../hooks/useAuth";
import Loader from "../components/others/Loader";

const Root = () => {
    const { userLoader } = useAuth();
    if (userLoader) {
        return <Loader />
    }
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;