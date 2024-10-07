import { FaCaretDown } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-black text-gray-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
            <span className="text-white">AI</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8 text-base md:text-lg">
          <div className="flex items-center space-x-1">
            <span>Features</span>
            <FaCaretDown />
          </div>
          <a href="#" className="hover:text-white">Developers</a>
          <div className="flex items-center space-x-1">
            <span>Company</span>
            <FaCaretDown />
          </div>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">Changelog</a>
        </nav>

        {/* Join Waitlist Button */}
        <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-xl border-gray-600 hover:opacity-90">
          Join waitlist
        </button>
      </div>
    </header>
  );
};

export default Header;
