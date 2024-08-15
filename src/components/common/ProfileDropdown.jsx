import { useState, useEffect, useRef } from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import AOS from 'aos';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const ProfileDropdown = ({ user, logOut }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigation = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        AOS.init({ duration: 300 });
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        logOut();
        navigation('/');
    }

    return (
        <div ref={dropdownRef} className="relative inline-block text-left z-50 border-2 md:border-4 rounded-full border-[#E94560A4]">
            {/* Profile Button with Tooltip */}
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none relative group"
            >
                <img
                    src={user?.photoURL ? user?.photoURL : "/user.png"}
                    alt="Profile"
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full"
                />
                {/* Tooltip */}
                <span className="absolute right-12 transform -translate-y-1/2 top-1/2 w-max bg-[#1A1A2E] text-white text-sm font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {user?.displayName ? user?.displayName : "Unknown"}
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                    data-aos="fade-down"
                >
                    <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-[#1A1A2E]"
                    >
                        <FaUser className="mr-2" /> View Profile
                    </Link>
                   
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                        <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                </div>
            )}
        </div>
    );
};

ProfileDropdown.propTypes = {
    user: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired,
};

export default ProfileDropdown;
