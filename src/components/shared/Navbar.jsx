import { useState } from 'react';
import { FaHome, FaSignInAlt, FaUserPlus, FaInfoCircle, FaTags, FaBoxOpen } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#1A1A2E] text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="flex items-center">
                        <img src="./logo.png" alt="Logo" className='w-28' />
                    </Link>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" className="hover:text-[#E94560] flex items-center">
                        <FaHome className="mr-2" /> Home
                    </NavLink>
                    <NavLink to="/about" className="hover:text-[#E94560] flex items-center">
                        <FaInfoCircle className="mr-2" /> About Us
                    </NavLink>
                    <NavLink to="/categories" className="hover:text-[#E94560] flex items-center">
                        <FaTags className="mr-2" /> Categories
                    </NavLink>
                    <NavLink to="/products" className="hover:text-[#E94560] flex items-center">
                        <FaBoxOpen className="mr-2" /> Products
                    </NavLink>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    <NavLink to="/login" className="bg-[#E94560] hover:bg-[#C5374F] text-white py-2 px-4 rounded flex items-center">
                        <FaSignInAlt className="mr-2" /> Login
                    </NavLink>
                    <NavLink to="/register" className="bg-[#0F3460] hover:bg-[#0C2B4E] text-white py-2 px-4 rounded flex items-center">
                        <FaUserPlus className="mr-2" /> Register
                    </NavLink>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col space-y-2 p-4">
                    <NavLink to="/" className="hover:text-[#E94560] flex items-center">
                        <FaHome className="mr-2" /> Home
                    </NavLink>
                    <NavLink to="/about" className="hover:text-[#E94560] flex items-center">
                        <FaInfoCircle className="mr-2" /> About Us
                    </NavLink>
                    <NavLink to="/categories" className="hover:text-[#E94560] flex items-center">
                        <FaTags className="mr-2" /> Categories
                    </NavLink>
                    <NavLink to="/products" className="hover:text-[#E94560] flex items-center">
                        <FaBoxOpen className="mr-2" /> Products
                    </NavLink>
                    <NavLink to="/login" className="bg-[#E94560] hover:bg-[#C5374F] text-white py-2 px-4 rounded flex items-center">
                        <FaSignInAlt className="mr-2" /> Login
                    </NavLink>
                    <NavLink to="/register" className="bg-[#0F3460] hover:bg-[#0C2B4E] text-white py-2 px-4 rounded flex items-center">
                        <FaUserPlus className="mr-2" /> Register
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
