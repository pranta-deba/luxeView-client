import { CiImageOff } from "react-icons/ci";
const Skeleton = () => {
    return (
        <div role="status" className="flex-grow flex items-center justify-center h-56 bg-[#0F3460A3] rounded-lg animate-pulse dark:bg-gray-700">
            <CiImageOff size={30}/>
        </div>
    );
};

export default Skeleton;