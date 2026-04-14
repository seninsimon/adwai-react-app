import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full px-6 lg:px-10 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="w-40 sm:w-48">
          <img 
            src={window.location.href.includes('piaxu') ? '/images/piaxu_logo.png' : '/images/adwailogo.png'} 
            alt={window.location.href.includes('piaxu') ? 'Piaxu' : 'Adwai'} 
            className="w-full h-auto" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-[#94d201] font-medium">Home</Link>
          <a href="/#whatwedo" className="text-gray-800 hover:text-[#94d201] font-medium">What we do</a>
          <a href="/#services" className="text-gray-800 hover:text-[#94d201] font-medium">What we offer</a>
          <a href="/#price" className="text-gray-800 hover:text-[#94d201] font-medium">Pricing</a>
          <Link to="/contact" className="text-gray-800 hover:text-[#94d201] font-medium">Contact</Link>

          {/* Get Started */}
          <Link
            to="/careassist"
            className="bg-[#e867e6] hover:bg-[#8967ef] text-white px-5 py-2 rounded-full font-medium transition"
          >
            Get Started
          </Link>
          
          <a
            href="https://assist.piaxu.com/login"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-300 px-4 py-2 rounded-full text-gray-800 hover:bg-gray-100 transition"
          >
            Sign In / Sign Up
          </a>

          
        </nav>

        {/* Social + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-3 text-gray-800">
            <a href="https://www.facebook.com/adwaisolutions/" target="_blank" rel="noreferrer" className="hover:text-[#94d201] text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#94d201] text-lg">
              <FaInstagram />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-gray-800"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Offcanvas */}
      {menuOpen && (
        <div className="fixed inset-0 z-60 bg-black bg-opacity-50 flex justify-end">
          <div className="w-72 bg-white h-full shadow-lg p-6 flex flex-col">

            {/* Close Button */}
            <button
              className="self-end text-2xl mb-6 text-gray-800 hover:text-red-500"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Mobile Nav */}
            <nav className="flex flex-col space-y-4 text-lg">

              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <a href="/#whatwedo" onClick={() => setMenuOpen(false)}>What we do</a>
              <a href="/#services" onClick={() => setMenuOpen(false)}>How It Works</a>
              <a href="/#price" onClick={() => setMenuOpen(false)}>Pricing</a>

              {/* Sign In / Sign Up */}
              <a
                href="https://assist.piaxu.com/login"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-300 px-4 py-2 rounded-lg text-center hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                Sign In / Sign Up
              </a>

              {/* Get Started (VISIBLE in mobile) */}
              <Link
                to="/careassist"
                onClick={() => setMenuOpen(false)}
                className="bg-[#e867e6] text-white px-4 py-2 rounded-lg text-center font-medium"
              >
                Get Started
              </Link>

              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}