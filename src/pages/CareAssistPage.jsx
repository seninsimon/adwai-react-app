import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function CareAssistPage() {
  return (
    <section className="container mx-auto px-4 mt-8 lg:mt-16 mb-16">
      <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm">
        <div className="md:w-7/12 p-8 md:p-16">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4C74F6] via-[#E253E5] to-[#FF7E30] hidden md:block">
            Create your free live chat
          </h1>
          <h1 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4C74F6] via-[#E253E5] to-[#FF7E30] md:hidden">
            Create your free live chat
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Embed live chat to your website after customizing it to your business
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e867e6] hover:bg-[#8967ef] text-white px-8 py-4 rounded-full font-medium transition-colors shadow-sm">
            Create Live Chat <FaArrowRight />
          </Link>
        </div>
        <div className="md:w-5/12 bg-gray-50 flex justify-center items-center py-16 px-8 rounded-l-3xl shadow-inner">
          <img src="/images/chat_bg.png" className="w-full max-w-sm h-auto object-contain drop-shadow-md" alt="Live Chat Banner" />
        </div>
      </div>
    </section>
  );
}
