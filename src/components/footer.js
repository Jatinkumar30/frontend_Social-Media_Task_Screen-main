import { FaHome, FaPlus, FaCog, FaUser, FaEnvelope } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";

const Footer = () => {
  return (
    <div className="fixed bottom-0 lg:w-[400px] left-0 right-0 p-4 bg-gradient-to-r from-blue-400 via-blue-700 to-blue-400 shadow-lg">
      <div className="flex justify-around text-white">
        <button className="focus:outline-none flex flex-col items-center space-y-1 transition-transform transform hover:scale-110 duration-200 ease-in-out">
          <FaHome size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button className="focus:outline-none flex flex-col items-center ml-4 space-y-1 transition-transform transform hover:scale-110 duration-200 ease-in-out">
          <FaTasks size={24} />
          <span className="text-xs">Tasks</span>
        </button>
        <button className="focus:outline-none flex flex-col items-center ml-4 space-y-1 transition-transform transform hover:scale-110 duration-200 ease-in-out">
          <FaPlus size={32} />
          <span className="text-xs">Add</span>
        </button>
        <button className="focus:outline-none flex flex-col  items-center space-y-1 transition-transform transform hover:scale-110 duration-200 ease-in-out">
          <FaCog size={24} />
          <span className="text-xs">Settings</span>
        </button>
        <button className="focus:outline-none flex flex-col items-center space-y-1 transition-transform transform hover:scale-110 duration-200 ease-in-out">
          <MdLeaderboard size={24} />
          <span className="text-xs">LeaderBoard</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
