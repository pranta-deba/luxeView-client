import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { ImSpinner11 } from "react-icons/im";
import axiosPublic from "../../api/axiosPublic";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { googleLogin, loginUser } = useAuth()
    const [loading, setLoading] = useState(false);
    const go = location.state ? location.state : "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const { data } = await axiosPublic.post('/login', { email, password });
            if (data.email === email) {
                await loginUser(email, password);
                toast.success("Login successful.");
                setLoading(false);
                navigate(go);
                return;
            }
            toast.error("You not authorized. Please register and try again!");
            setLoading(false);
            return;

        } catch (error) {
            console.log(error.message);
            toast.error("Invalid username or password!");
            setLoading(false);
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            navigate(go);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg"
            >
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-[#1A1A2E]">
                        Sign in to Your Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Welcome back! Please login to continue.
                    </p>
                </div>
                <form onSubmit={handleLogin} className="mt-8 space-y-6">
                    <div>
                        <button
                            onClick={handleGoogleLogin}
                            type="button"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E94560] hover:bg-[#0F3460] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A2E] transition duration-300"
                        >
                            <FaGoogle className="mr-2" /> Sign in with Google
                        </button>
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
                            type="password"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1A1A2E] focus:border-[#E94560] focus:z-10 sm:text-sm"
                            placeholder="Password"
                            minLength={6}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-[#1A1A2E] focus:ring-[#E94560] border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                className="font-medium text-[#E94560] hover:text-[#0F3460] transition duration-300"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center items-center gap-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A1A2E] hover:bg-[#0F3460] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E94560] transition duration-300"
                        >
                            {loading && <ImSpinner11 className="animate-spin" />} Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;