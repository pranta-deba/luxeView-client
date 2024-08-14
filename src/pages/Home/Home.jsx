import Banner from "../../components/common/Banner";
import FeaturedProducts from "../../components/common/FeaturedProducts";
import GoogleLoginModal from "../../components/modals/GoogleLoginModal";

const Home = () => {
    return (
        <div>
            <GoogleLoginModal />
            <Banner />
            <FeaturedProducts />
        </div>
    );
};

export default Home;