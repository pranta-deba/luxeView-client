import { useState, useEffect, useRef } from 'react';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

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

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            {/* Profile Button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
            >
                <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                    data-aos="fade-down"
                >
                    <a
                        href="/profile"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-[#1A1A2E]"
                    >
                        <FaUser className="mr-2" /> View Profile
                    </a>
                    <a
                        href="/settings"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-[#1A1A2E]"
                    >
                        <FaCog className="mr-2 text-[#1A1A2E]" /> Settings
                    </a>
                    <a
                        href="/logout"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                        <FaSignOutAlt className="mr-2" /> Logout
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
