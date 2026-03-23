import { FaArrowRight } from 'react-icons/fa';

export default function CareAssistPage() {
  return (
    <section className="container mx-auto px-4 mt-8 lg:mt-16 mb-16">
      
      <div className="grid md:grid-cols-2 gap-6">

        {/* CARE CARD */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
          
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">
              Care Platform
            </h2>

            <p className="text-gray-600 mb-6">
              Access our care services platform designed to manage and deliver
              better support experiences for your users and customers.
            </p>
          </div>

          <a
            href="https://care.piaxu.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#4C74F6] hover:bg-[#3b5fe0] text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Go to Care <FaArrowRight />
          </a>
        </div>

        {/* ASSIST CARD */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
          
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">
              Assist Platform
            </h2>

            <p className="text-gray-600 mb-6">
              Manage live chat, customer interactions, and automation tools
              through the Assist dashboard for better engagement.
            </p>
          </div>

          <a
            href="https://assist.piaxu.com/dashboard"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#e867e6] hover:bg-[#8967ef] text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Go to Assist <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
}