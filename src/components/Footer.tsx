import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Footer Navigation */}
        <div className="mb-6">
          <a href="#" className="text-gray-400 hover:text-purple-500 mx-4 transition duration-300">
            À propos
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 mx-4 transition duration-300">
            Politique de confidentialité
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 mx-4 transition duration-300">
            Conditions d'utilisation
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 mx-4 transition duration-300">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 mb-4">
          &copy; {new Date().getFullYear()} Anonymous Mail. Tous droits réservés.
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
