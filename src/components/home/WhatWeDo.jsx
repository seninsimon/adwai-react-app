import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { FaUserMd, FaHeadphones, FaCloudDownloadAlt } from 'react-icons/fa';

export default function WhatWeDo() {
  const services = [
    {
      title: 'Strategy Services',
      icon: <FaUserMd className="text-4xl mx-auto mb-5 text-gray-700 p-2 border border-gray-400 rounded-full w-16 h-16" />,
      desc: 'We help businesses define and refine their goals with tailored digital, workflow automation and data strategies.',
      moreDesc: 'From understanding market needs to identifying the best technology stack, we create actionable plans that ensure long-term growth. Our strategic approach is data-driven, customer-centered, and aligned with regulatory standards.'
    },
    {
      title: 'Consulting Services',
      icon: <FaHeadphones className="text-4xl mx-auto mb-5 text-gray-700 p-2 border border-gray-400 rounded-full w-16 h-16" />,
      desc: 'Our expert consultants provide in-depth guidance to streamline your operations and improve outcomes.',
      moreDesc: "We offer personalized insights on workflow optimization, assist adoption, and compliance. Whether you're just starting or scaling, we help you make informed, effective decisions."
    },
    {
      title: 'Implementation Services',
      icon: <FaCloudDownloadAlt className="text-4xl mx-auto mb-5 text-gray-700 p-2 border border-gray-400 rounded-full w-16 h-16" />,
      desc: 'We work closely with partners to ensure smooth implementation of assists, systems, data and platforms.',
      moreDesc: 'From planning to deployment, we align with your team to meet timelines and deliver high-quality results. Our collaborative approach ensures seamless integration and maximum efficiency.'
    },
    {
      title: 'Custom Assist Services',
      icon: <FaHeadphones className="text-4xl mx-auto mb-5 text-gray-700 p-2 border border-gray-400 rounded-full w-16 h-16" />,
      desc: 'Our development team builds custom solutions tailored to your unique needs. Whether it\'s customer portals,',
      moreDesc: 'care management tools, or internal systems, we ensure every solution is secure, scalable, and user-friendly. We prioritize innovation and compliance at every step.'
    },
    {
      title: 'Migration and Integration Services',
      icon: <FaHeadphones className="text-4xl mx-auto mb-5 text-gray-700 p-2 border border-gray-400 rounded-full w-16 h-16" />,
      desc: 'We make transitioning from legacy systems to modern healthcare platforms smooth and risk-free.',
      moreDesc: 'Our team ensures data integrity, minimal downtime, and full regulatory compliance. With our migration services, you get improved performance without disrupting care delivery.'
    }
  ];

  return (
    <section id="whatwedo" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4C74F6] via-[#E253E5] to-[#FF7E30] inline-block">
            What We Do ?
          </h1>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="h-auto">
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl p-6 text-center h-full flex flex-col bg-white hover:shadow-lg transition-shadow">
      {service.icon}
      <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
      <p className="text-gray-600 mb-2">
        {service.desc}
        <button 
          onClick={() => setShowMore(!showMore)}
          className="ml-2 text-[#794134] underline bg-transparent border-none cursor-pointer hover:text-red-700 whitespace-nowrap"
        >
          {showMore ? 'Less' : 'More'}
        </button>
      </p>
      <div className={`text-sm text-gray-500 mt-2 transition-all duration-300 overflow-hidden ${showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {service.moreDesc}
      </div>
    </div>
  );
}
