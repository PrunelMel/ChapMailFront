import { FaBell, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-black text-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-500">ChapMail</div>

      {/* Search Bar */}
      <div className="relative w-1/2 hidden md:block">
        <input
          type="text"
          className="bg-gray-800 text-white rounded-full w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Rechercher..."
        />
        <FaSearch className="absolute top-3 right-3 text-gray-400" />
      </div>

      {/* Icons & User Avatar */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative">
          <FaBell className="text-gray-400 hover:text-purple-500 cursor-pointer" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>

        {/* User Avatar */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="user avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-gray-400 hidden md:block">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
