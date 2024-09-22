import { FaUserAlt } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { LiaMagicSolid } from "react-icons/lia";
import { GiMoneyStack } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-white via-blue-100 to-blue-300 p-3 md:p-4 shadow-md text-white w-full overflow-hidden">
      <div className="text-xl md:text-xl font-semibold flex items-center space-x-2">
        <span className="text-black ">Task Details</span>
      </div>
      <nav className="flex items-center space-x-4 md:space-x-6">
        {/* <NotificationIcon badgeCount={35} /> */}
        <GiftPoints points={3982} />
        <BalanceInfo balance="₹2875.00" />
        <UserDropdown  />
      </nav>
    </header>
  );
};

const NotificationIcon = ({ badgeCount }) => {
  return (
    <div className="relative cursor-pointer hover:scale-105 transition-transform duration-300">
      <MdNotifications className="text-2xl md:text-3xl text-white" />
      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-lg px-2">
        {badgeCount}
      </span>
    </div>
  );
};

const BalanceInfo = ({ balance }) => {
  return (
    <div className="flex items-center bg-green-200 rounded-lg px-3 py-1 md:px-4 md:py-2 shadow-md hover:bg-green-300 transition-colors duration-200">
      <GiMoneyStack className="text-xl text-green-700" />
      <span className="ml-2 text-green-800 text-sm md:text-base font-medium">
        {balance}
      </span>
    </div>
  );
};

const GiftPoints = ({ points }) => {
  return (
    <div className="flex items-center bg-white rounded-lg px-3 py-1 md:px-4 md:py-2 shadow-md hover:bg-red-300 transition-colors duration-200">
      <LiaMagicSolid className="text-xl text-red-600" />
      <span className="ml-2 text-red-700 text-sm md:text-base font-medium">
        {points}
      </span>
    </div>
  );
};

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div>
        <FaUserAlt className="text-2xl md:text-3xl text-white" />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 md:w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
