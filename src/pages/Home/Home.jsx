import { Helmet } from "react-helmet-async";
import Banner from "../../components/common/Banner";
import FeaturedProducts from "../../components/common/FeaturedProducts";
import GoogleLoginModal from "../../components/modals/GoogleLoginModal";
import HomeGrid from "../../components/common/HomeGrid";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>LuxeView | Home</title>
            </Helmet>
            <GoogleLoginModal />
            <Banner />
            <FeaturedProducts />
            <HomeGrid />
        </div>
    );
};

export default Home;