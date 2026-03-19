import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

export default function Pricing() {
  const plans = [
    {
      name: 'Preemium',
      price: '$0',
      credits: '50 Credits',
      features: ['Perfect for getting started and exploring the platform.']
    },
    {
      name: 'Standard Plans',
      price: '$5',
      credits: '+25 Credits',
      features: ['Great for light usage or occasional needs.']
    },
    {
      name: 'Seasoned Plans',
      price: '$25',
      credits: '+160 Credits',
      features: ['Best value for regular users with higher volume needs.']
    }
  ];

  return (
    <section id="price" className="py-16 bg-gray-50 bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4C74F6] via-[#E253E5] to-[#FF7E30] inline-block mb-4">
            Pricing
          </h1>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Simple, Flexible Pricing</h4>
          <p className="text-gray-600">Choose the plan that fits your needs. Start for free or upgrade for more volume and benefits.</p>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {plans.map((plan, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 border border-gray-200 p-8 h-full flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#cad2ff] transition-colors group-hover:bg-[#627afe]"></div>
                
                <h2 className="text-2xl font-semibold text-center mt-4 text-gray-800">{plan.name}</h2>
                
                <div className="text-center mt-8 text-[#627afe]">
                  <span className="text-6xl font-bold tracking-tighter">{plan.price}</span>
                  <h4 className="text-xl mt-4 font-medium flex items-center justify-center gap-2 text-gray-700">
                    <span className="text-2xl">💳</span> {plan.credits}
                  </h4>
                </div>

                <div className="text-center mt-8 mb-8">
                  <a href="http://journeys.adwai.com/login" className="inline-block bg-[#e867e6] hover:bg-[#8967ef] text-white px-8 py-3 rounded-full font-medium transition-colors w-full">
                    Get Started
                  </a>
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 text-gray-600 text-sm">
                      <FaCheck className="text-[#94d201] mt-1 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
