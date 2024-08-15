import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <FaSpinner className="text-6xl text-[#E94560] animate-spin" />
        <div className="mt-4 flex space-x-2">
          <div className="w-3 h-3 bg-[#E94560] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#0F3460] rounded-full animate-bounce200"></div>
          <div className="w-3 h-3 bg-[#E94560] rounded-full animate-bounce400"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
