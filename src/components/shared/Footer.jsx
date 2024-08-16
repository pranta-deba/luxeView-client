import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A2E] text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo Section */}
                <div className="mb-6 md:mb-0">
                    <Link to="/">
                        <img src="/logo.png" alt="Logo" className="h-12" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row items-center">
                    <Link to={"/about"} className="mb-2 md:mb-0 md:mr-6 text-sm hover:text-[#E94560] transition-colors duration-300">
                        About Us
                    </Link>
                    <Link to="/products" className="mb-2 md:mb-0 md:mr-6 text-sm hover:text-[#E94560] transition-colors duration-300">
                        Shop
                    </Link>
                    <Link to={"/contact"} className="mb-2 md:mb-0 md:mr-6 text-sm hover:text-[#E94560] transition-colors duration-300">
                        Contact
                    </Link>
                    <button className="text-sm hover:text-[#E94560] transition-colors duration-300">
                        Privacy Policy
                    </button>
                </div>

                {/* Social Media Icons */}
                <div className="flex mt-6 md:mt-0">
                    <a  className="mr-6 hover:text-[#E94560] transition-colors duration-300">
                        <FaFacebookF size={20} />
                    </a>
                    <a  className="mr-6 hover:text-[#E94560] transition-colors duration-300">
                        <FaTwitter size={20} />
                    </a>
                    <a  className="hover:text-[#E94560] transition-colors duration-300">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                <p>&copy; 2024 YourCompany. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
