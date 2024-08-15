import { useState } from 'react';
import { FaHome, FaSignInAlt, FaUserPlus, FaInfoCircle, FaBoxOpen, FaOpencart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import ProfileDropdown from '../common/ProfileDropdown';
import { TfiMenu } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useAuth();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="flex items-center">
                        <img src="/logo.png" alt="Logo" className='w-20 md:w-28' />
                    </Link>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        Home
                    </NavLink>
                    <NavLink to="/products" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        Products
                    </NavLink>
                    {user && <NavLink to="/Cart" className="text-[#0F3460] hover:text-[#E94560] flex items-center relative">
                        Cart
                        <span className="absolute top-0 right-0 -mt-3 -mr-3 bg-[#E94560] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            3
                        </span>
                    </NavLink>}

                    <NavLink to="/about" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        About Us
                    </NavLink>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    {!user && <><Link to="/login" className="bg-[#E94560] hover:bg-[#C5374F] text-white py-2 px-4 rounded flex items-center">
                        <FaSignInAlt className="mr-2" /> Login
                    </Link>
                        <Link to="/register" className="bg-[#0F3460] hover:bg-[#0C2B4E] text-white py-2 px-4 rounded flex items-center">
                            <FaUserPlus className="mr-2" /> Register
                        </Link></>}
                    {user && <ProfileDropdown user={user} logOut={logOut} />}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex gap-3 items-center justify-center">
                    {user && <ProfileDropdown user={user} logOut={logOut} />}
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
                    <NavLink to="/products" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        <FaBoxOpen className="mr-2" /> Products
                    </NavLink>
                    {user && <NavLink to="/cart" className="text-[#0F3460] hover:text-[#E94560] flex items-center relative">
                        <FaOpencart className="mr-2" />
                        Cart
                        <span className="absolute top-0 right-0 -mt-3 -mr-0 bg-[#E94560] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            3
                        </span>
                    </NavLink>}

                    <NavLink to="/about" className="text-[#0F3460] hover:text-[#E94560] flex items-center">
                        <FaInfoCircle className="mr-2" /> About Us
                    </NavLink>
                    {!user && <><Link to="/login" className="bg-[#E94560] hover:bg-[#C5374F] text-white py-2 px-4 rounded flex items-center">
                        <FaSignInAlt className="mr-2" /> Login
                    </Link>
                        <Link to="/register" className="bg-[#0F3460] hover:bg-[#0C2B4E] text-white py-2 px-4 rounded flex items-center">
                            <FaUserPlus className="mr-2" /> Register
                        </Link></>}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
