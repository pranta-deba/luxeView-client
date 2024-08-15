import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const GoogleLoginModal = () => {
    const navigation = useNavigate();
    const { googleLogin } = useAuth();
    const [showGoogleLogin, setShowGoogleLogin] = useState(false);
    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            navigation("/");
            setShowGoogleLogin(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        // Show Google login modal after 5 seconds only on the first visit
        const hasShownGoogleLogin = localStorage.getItem('hasShownGoogleLogin');
        if (!hasShownGoogleLogin) {
            const googleLoginTimer = setTimeout(() => {
                setShowGoogleLogin(true);
                localStorage.setItem('hasShownGoogleLogin', 'true');
            }, 3000);

            // Cleanup timer
            return () => clearTimeout(googleLoginTimer);
        }
    }, []);

    return (
        <div>
            {/* Your main content goes here */}

            {/* Google Login Modal */}
            {showGoogleLogin && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#1A1A2E] text-white p-8 rounded-lg shadow-lg relative w-96 h-auto">
                        <button
                            onClick={() => setShowGoogleLogin(false)}
                            className="absolute top-2 right-2 text-[#E94560]">
                            <MdClose size={24} />
                        </button>
                        <div className="text-center">
                            <FcGoogle size={48} className="mx-auto mb-4" />
                            <h2 className="text-2xl font-bold mb-4">Sign in with Google</h2>
                            <p className="mb-6">Use your Google account to sign in to our platform.</p>
                            <button onClick={handleGoogleLogin} className="bg-[#E94560] text-white px-6 py-2 rounded-md hover:bg-[#C23B50] transition">
                                <FcGoogle className="inline-block mr-2" /> Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GoogleLoginModal;