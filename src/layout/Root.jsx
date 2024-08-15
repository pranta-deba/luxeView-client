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
        <>
            <Navbar />
            <main className="min-h-[calc(100vh-261.688px)]">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;