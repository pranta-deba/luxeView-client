import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ImSpinner11 } from "react-icons/im";
import toast from "react-hot-toast";
import axiosPublic from "../../api/axiosPublic";
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { googleLogin, createUser, updateUser } = useAuth();
    const go = location.state ? location.state : "/";
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;

        if (password !== confirm_password) {
            toast.error("Passwords do not match");
            setLoading(false);
            return;
        }
        try {
            const { data } = await axiosPublic.post('/register', { name, email });
            if (!data.insertedId) {
                toast.error("User already registered!");
                setLoading(false);
                return;
            }
            await createUser(email, password);
            await updateUser(name, null);
            toast.success("Registration Success.");
            setLoading(false);
            navigate(go);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            navigate(go);
        } catch (error) {
            console.log(error.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg"
            >
                <Helmet>
                    <title>LuxeView | Register</title>
                </Helmet>
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-[#1A1A2E]">
                        Create an Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Sign up to access all features
                    </p>
                </div>
                <form onSubmit={handleRegister} className="mt-8 space-y-6">
                    <div>
                        <button
                            onClick={handleGoogleLogin}
                            type="button"
                            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E94560] hover:bg-[#0F3460] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A2E] transition duration-300"
                        >
                            <FaGoogle className="mr-2" /> Sign in with Google
                        </button>
                    </div>
                    <div className="relative">
                        <input
                            name="name"
                            type="text"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1A1A2E] focus:border-[#E94560] focus:z-10 sm:text-sm"
                            placeholder="Name"
                        />
                    </div>
                    <div className="relative">
                        <input
                            name="email"
                            type="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1A1A2E] focus:border-[#E94560] focus:z-10 sm:text-sm"
                            placeholder="Email"
                        />
                    </div>
                    <div className="relative">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1A1A2E] focus:border-[#E94560] focus:z-10 sm:text-sm"
                            placeholder="Password"
                            minLength={6}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="relative">
                        <input
                            name="confirm_password"
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1A1A2E] focus:border-[#E94560] focus:z-10 sm:text-sm"
                            placeholder="Confirm Password"
                            minLength={6}
                        />
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-[#1A1A2E] focus:ring-[#E94560] border-gray-300 rounded"
                        />
                        <label
                            htmlFor="terms"
                            className="ml-2 block text-sm text-gray-900"
                        >
                            I agree to the{" "}
                            <span className="text-[#E94560] hover:underline cursor-pointer">
                                Terms and Conditions
                            </span>
                        </label>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center items-center gap-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A1A2E] hover:bg-[#0F3460] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E94560] transition duration-300"
                        >
                            {loading && <ImSpinner11 className="animate-spin" />} Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
