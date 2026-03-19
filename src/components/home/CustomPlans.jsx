import { Link } from 'react-router-dom';

export default function CustomPlans() {
  return (
    <>
      <section id="affiliates" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="pr-0 md:pr-12">
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4C74F6] via-[#E253E5] to-[#FF7E30] inline-block mb-6">
                  Need Something Custom?
                </h1>
                <p className="text-lg text-gray-700 mb-6">We support a wide range of use cases and partner models. Whether you're:</p>
                <ul className="list-disc pl-6 space-y-3 text-gray-600 text-lg">
                  <li>A practice with multiple practitioners</li>
                  <li>Looking for white-labeled solutions</li>
                  <li>Representing an enterprise with large volume</li>
                  <li>A non-profit organization</li>
                  <li>Or interested in a partnership</li>
                </ul>
              </div>
            </div>
        
            <div className="w-full md:w-1/2 px-4">
              <img src="/images/banner_03.png" alt="Custom Plans" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            <Link to="/contact" className="hover:opacity-80 transition-opacity bg-clip-text text-transparent bg-linear-to-r underline underline-offset-4 from-[#4C74F6] via-[#E253E5] to-[#FF7E30]">
              Write to us for a custom pricing plan tailored to your needs.
            </Link>
          </h3>
        </div>
  
    </>
  );
}
