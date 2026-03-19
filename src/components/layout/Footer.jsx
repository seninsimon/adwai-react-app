import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-10 border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 pb-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img src="/images/adwailogo.png" alt="Adwai" className="w-32 mb-4" />
            <p className="text-gray-600 text-sm md:pr-12 text-justify">
              To revolutionize the caregiving landscape by seamlessly integrating technology into every aspect of care, creating a future where caregivers are empowered, care recipients thrive, and the human connection remains at the heart of care. To empower caregivers with cutting-edge technology that enhances their ability to provide compassionate, personalized, and efficient care, while improving the quality of life for both caregivers and care recipients.
            </p>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h5 className="uppercase text-lg mb-4 font-semibold">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-[#94d201] transition-colors">Home</Link></li>
              <li><a href="/#explore" className="text-gray-600 hover:text-[#94d201] transition-colors">Explore</a></li>
              <li><a href="http://journeys.adwai.com" className="text-gray-600 hover:text-[#94d201] transition-colors">Sign In</a></li>
              <li><a href="http://journeys.adwai.com/login" className="text-gray-600 hover:text-[#94d201] transition-colors">Sign Up</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h5 className="uppercase text-lg mb-4 font-semibold">Get In Touch</h5>
            <p className="text-gray-600">contact@adwai.com</p>
          </div>
        </div>
      </div>
      <div className="py-4 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>Copyright © 2025 adwai - All Right Reserved.</p>
      </div>
    </footer>
  );
}
