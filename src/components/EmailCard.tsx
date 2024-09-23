import { FaEnvelopeOpen, FaTrash } from 'react-icons/fa';

const EmailCard = ({ sender, subject, snippet, date, isRead }: { sender: string; subject: string; snippet: string; date: string; isRead: boolean }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 mb-2 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer transition-colors duration-200 ${
        isRead ? 'opacity-70' : 'opacity-100'
      }`}
    >
      {/* Left Side - Sender and Subject */}
      <div className="flex items-center space-x-4">
        <div className="text-white">
          <h4 className="font-semibold text-purple-500">{sender}</h4>
          <p className="text-gray-400">{subject}</p>
        </div>
      </div>

      {/* Middle - Snippet */}
      <div className="flex-1 mx-4">
        <p className="text-gray-400 truncate">{snippet}</p>
      </div>

      {/* Right Side - Date and Icons */}
      <div className="flex items-center space-x-4">
        {/* Date */}
        <span className="text-gray-500 text-sm">{date}</span>

        {/* Icons (Read, Delete) */}
        <div className="flex space-x-2">
          <FaEnvelopeOpen className="text-gray-400 hover:text-purple-500" />
          <FaTrash className="text-gray-400 hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
