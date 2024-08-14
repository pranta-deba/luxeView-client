import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A2E] text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo Section */}
                <div className="mb-6 md:mb-0">
                    <a href="/">
                        <img src="./logo.png" alt="Logo" className="h-12" />
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row items-center">
                    <a href="" className="mb-2 md:mb-0 md:mr-6 text-sm hover:text-[#E94560] transition-colors duration-300">
                        About Us
                    </a>
                    <a href="" className="mb-2 md:mb-0 md:mr-6 text-sm hover:text-[#E94560] transition-colors duration-300">
                        Shop
                    </a>
                    <a href="" className="mb-2 md:mb-0 md:mr-6 text-sm hover:text-[#E94560] transition-colors duration-300">
                        Contact
                    </a>
                    <a href="" className="text-sm hover:text-[#E94560] transition-colors duration-300">
                        Privacy Policy
                    </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex mt-6 md:mt-0">
                    <a href="" className="mr-6 hover:text-[#E94560] transition-colors duration-300">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="" className="mr-6 hover:text-[#E94560] transition-colors duration-300">
                        <FaTwitter size={20} />
                    </a>
                    <a href="" className="hover:text-[#E94560] transition-colors duration-300">
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
