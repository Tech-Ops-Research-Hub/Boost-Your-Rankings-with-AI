import { FaInstagram, FaYoutube, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="text-gray-400 p-10 sm:p-16 border border-gray-600 mx-auto"
      style={{ width: '1195px', height: '408px', backgroundColor: 'black' }} // Explicit black background color
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start h-full">
        
        {/* Left Section (Logo and Social Icons) */}
        <div className="flex flex-col justify-between h-full">
          {/* Logo */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center border border-gray-400">
              <span className="text-white">AI</span>
            </div>
            <span className="ml-3 text-white text-lg">AI Startup Kit</span>
          </div>

          {/* Social Icons Section */}
          <div className="flex space-x-6 text-2xl"> {/* Social Icons at the bottom left */}
            <FaTimes className="hover:text-red-500 transition duration-200 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 transition duration-200 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 transition duration-200 cursor-pointer" />
          </div>
        </div>

        {/* Right Section (Links) */}
        <div className="grid grid-cols-4 gap-y-6 text-right w-full"> {/* Adjusted for right section */}
          {/* Product Links */}
          <div className="text-center"> {/* Center-aligned */}
            <h3 className="text-white mb-4 text-base tracking-wider" style={{ letterSpacing: '0.75px' }}>Product</h3>
            <ul className="space-y-2 text-sm" style={{ letterSpacing: '0.75px' }}>
              <li>Features</li>
              <li>Integration</li>
              <li>Updates</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center"> {/* Center-aligned */}
            <h3 className="text-white mb-4 text-base tracking-wider" style={{ letterSpacing: '0.75px' }}>Company</h3>
            <ul className="space-y-2 text-sm" style={{ letterSpacing: '0.75px' }}>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Manifesto</li>
              <li>Press</li>
              <li>Contract</li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="text-center"> {/* Center-aligned */}
            <h3 className="text-white mb-4 text-base tracking-wider" style={{ letterSpacing: '0.75px' }}>Resources</h3>
            <ul className="space-y-2 text-sm" style={{ letterSpacing: '0.75px' }}>
              <li>Examples</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Docs</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center"> {/* Center-aligned */}
            <h3 className="text-white mb-4 text-base tracking-wider" style={{ letterSpacing: '0.75px' }}>Legal</h3>
            <ul className="space-y-2 text-sm" style={{ letterSpacing: '0.5px' }}>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
