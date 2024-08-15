import { FaUserEdit } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { uploadImageToImgBB } from '../../api/imageUpload';
import { useState } from 'react';
import toast from "react-hot-toast";
import { ImSpinner11 } from 'react-icons/im';

const UserProfile = () => {
    const { user, updateUser } = useAuth();
    const [loader, setLoader] = useState(false);

    const handleUpdate = async (e) => {
        setLoader(true)
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.files[0];
        if (name === user?.displayName) {
            toast.error("No changes!");
            setLoader(false);
            return;
        }
        if (!photo) {
            await updateUser(name, user?.photoURL);
            toast.success("Profile updated successfully!");
            setLoader(false);
            e.target.reset();
            return;
        }
        const photoURL = await uploadImageToImgBB(photo);
        if (photoURL) {
            try {
                await updateUser(name, photoURL);
                toast.success("Profile updated successfully!");
                setLoader(false);
                e.target.reset();
                return;
            } catch (error) {
                toast.error("Failed to update profile. Please try again!");
                console.log(error.message);
                setLoader(false);
                return;
            }
        }
        toast.error("Failed to update profile. Please try again!");
        setLoader(false);
    };

    return (
        <div className="min-h-screen py-4 md:py-20 px-3">
            <div data-aos="fade-up" className="max-w-lg mx-auto rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center">
                    <img
                        src={user?.photoURL ? user?.photoURL : "/user.png"}
                        alt="Profile"
                        className="w-32 h-32 rounded-full mb-4"
                    />
                    <h2 className="text-3xl font-bold mb-2">{user?.displayName}</h2>
                    <p className="text-lg text-[#E94560]">{user?.email}</p>
                </div>

                <form onSubmit={handleUpdate} className="mt-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#E94560]">Name</label>
                        <input
                            type="text"
                            defaultValue={user?.displayName}
                            name='name'
                            className="mt-1 block w-full px-3 py-2  border border-[#E94560] rounded-md shadow-sm focus:outline-none focus:ring-[#E94560] focus:border-[#E94560] sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-[#E94560]">Profile Picture</label>
                        <input
                            type="file"
                            name='photo'
                            className="mt-1 block w-full px-3 py-2 border border-[#E94560] rounded-md shadow-sm focus:outline-none focus:ring-[#E94560] focus:border-[#E94560] sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E94560] hover:bg-[#E94560A4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E94560]"
                    >
                        {loader ? <ImSpinner11 className="animate-spin" /> : <FaUserEdit />} Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
