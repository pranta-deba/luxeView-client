import { useState } from 'react';
import { FaHome, FaSignInAlt, FaUserPlus, FaInfoCircle, FaTags, FaBoxOpen } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import ProfileDropdown from '../common/ProfileDropdown';
import { TfiMenu } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
// import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const { user } = useAuth();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="flex items-center">
                        <img src="./logo.png" alt="Logo" className='w-20 md:w-28' />
                    </Link>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        Home
                    </NavLink>
                    <NavLink to="/categories" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        Categories
                    </NavLink>
                    <NavLink to="/products" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        Products
                    </NavLink>
                    <NavLink to="/about" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        About Us
                    </NavLink>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/login" className="bg-[#E94560] hover:bg-[#C5374F] text-white py-2 px-4 rounded flex items-center">
                        <FaSignInAlt className="mr-2" /> Login
                    </Link>
                    <Link to="/register" className="bg-[#0F3460] hover:bg-[#0C2B4E] text-white py-2 px-4 rounded flex items-center">
                        <FaUserPlus className="mr-2" /> Register
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex gap-3">
                    <ProfileDropdown />
                    <button onClick={toggleMenu} className="text-[#0F3460]">
                        {!isMenuOpen ? <TfiMenu size={30} /> :
                            <GrClose size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col space-y-4 p-4">
                    <NavLink to="/" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        <FaHome className="mr-2" /> Home
                    </NavLink>
                    <NavLink to="/categories" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        <FaTags className="mr-2" /> Categories
                    </NavLink>
                    <NavLink to="/products" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        <FaBoxOpen className="mr-2" /> Products
                    </NavLink>
                    <NavLink to="/about" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        <FaInfoCircle className="mr-2" /> About Us
                    </NavLink>
                    <Link to="/login" className="bg-[#E94560] hover:bg-[#C5374F] text-white py-2 px-4 rounded flex items-center">
                        <FaSignInAlt className="mr-2" /> Login
                    </Link>
                    <Link to="/register" className="bg-[#0F3460] hover:bg-[#0C2B4E] text-white py-2 px-4 rounded flex items-center">
                        <FaUserPlus className="mr-2" /> Register
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
