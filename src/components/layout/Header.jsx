import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
  scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
}`}>
  <div className="w-full px-6 lg:px-10 flex justify-between items-center">
    
    {/* Logo */}
    <Link to="/" className="w-40 sm:w-48">
      <img src="/images/adwailogo.png" alt="Adwai" className="w-full h-auto" />
    </Link>

    {/* Desktop Nav */}
    <nav className="hidden lg:flex items-center space-x-6">
      <Link to="/" className="text-gray-800 hover:text-[#94d201] font-medium transition-colors">Home</Link>
      <a href="/#whatwedo" className="text-gray-800 hover:text-[#94d201] font-medium transition-colors">What we do</a>
      <a href="/#services" className="text-gray-800 hover:text-[#94d201] font-medium transition-colors">How It Works</a>
      <a href="/#price" className="text-gray-800 hover:text-[#94d201] font-medium transition-colors">Pricing</a>
      <Link to="/contact" className="text-gray-800 hover:text-[#94d201] font-medium transition-colors">Contact</Link>
      <Link to="/careassist" className="bg-[#e867e6] hover:bg-[#8967ef] text-white px-5 py-2 rounded-full font-medium transition-colors">Get Started</Link>
    </nav>

        {/* Social & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-3 text-gray-800">
            <a href="https://www.facebook.com/adwaisolutions/" target="_blank" rel="noreferrer" className="hover:text-[#94d201] text-lg"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#94d201] text-lg"><FaInstagram /></a>
            <a href="#" className="hover:text-[#94d201] text-lg"><FaYoutube /></a>
          </div>
          <button className="lg:hidden text-2xl text-gray-800" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Offcanvas */}
      {menuOpen && (
        <div className="fixed inset-0 z-60 bg-black bg-opacity-50 flex justify-end">
          <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col">
            <button className="self-end text-2xl mb-6 text-gray-800 hover:text-red-500" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </button>
            <nav className="flex flex-col space-y-4 text-lg">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <a href="/#whatwedo" onClick={() => setMenuOpen(false)}>What we do</a>
              <a href="/#services" onClick={() => setMenuOpen(false)}>How It Works</a>
              <a href="/#price" onClick={() => setMenuOpen(false)}>Pricing</a>
              <Link to="/careassist" onClick={() => setMenuOpen(false)}>Care Assist</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
