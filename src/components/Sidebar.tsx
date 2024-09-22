import { useState } from 'react';
import { FaInbox, FaPaperPlane, FaFirstdraft,  FaCog, FaTrash, FaExclamation } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-black h-screen ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
      {/* Logo and Toggle Button */}
      <div className="flex justify-between items-center p-4">
        <h1 className={`text-2xl font-bold text-purple-500 ${!isOpen && 'hidden'}`}>ChapMail</h1>
        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-10">
        <ul className="space-y-4">
          <li className="text-gray-400 hover:bg-purple-500 hover:text-white p-2 rounded-lg cursor-pointer flex items-center">
            <FaInbox className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Inbox</span>
          </li>
          <li className="text-gray-400 hover:bg-purple-500 hover:text-white p-2 rounded-lg cursor-pointer flex items-center">
            <FaPaperPlane className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Sent</span>
          </li>
          <li className="text-gray-400 hover:bg-purple-500 hover:text-white p-2 rounded-lg cursor-pointer flex items-center">
            <FaFirstdraft     className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Drafts</span>
          </li>
          <li className="text-gray-400 hover:bg-purple-500 hover:text-white p-2 rounded-lg cursor-pointer flex items-center">
            <FaExclamation className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Important</span>
          </li>
          <li className="text-gray-400 hover:bg-purple-500 hover:text-white p-2 rounded-lg cursor-pointer flex items-center">
            <FaTrash className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Trash</span>
          </li>
          <li className="text-gray-400 hover:bg-purple-500 hover:text-white p-2 rounded-lg cursor-pointer flex items-center">
            <FaCog className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
