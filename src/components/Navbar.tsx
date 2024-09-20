
const Navbar = () => {
  return (
    <nav className="bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-500 hover:text-purple-300 transition duration-300">
          ChapMail
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-white hover:text-purple-400 transition duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-400 transition duration-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Call to Action Button */}
        <div>
          <a
            href="#"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar