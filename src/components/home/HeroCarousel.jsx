import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function HeroCarousel() {
  const slides = [
    {
      title: 'What Are Care Assists',
      desc: 'Care Assists are smart systems that can understand, recommend, and are trained to assist your care practitioners.',
      moreDesc: "Whether it's responding to care seeker inquiries, automating internal workflows, or supporting care practitioners directly, these assists go far beyond other non smart solutions today, resulting in more satisfied care seekers, better care delivery, stronger retention, and increased revenue.",
      image: '/images/banner_01.png'
    },
    {
      title: 'Empower your team',
      desc: 'Care Assists are adaptable for transforming care experience. Designed to enhance—not replace—human care.',
      moreDesc: "Care Assists ensure that the human touch remains front and center where it matters most. Practitioners can easily train, tune and turn these assists on or off as needed to match their workflows, preferences, and tone of care.",
      image: '/images/banner_03.png'
    },
    {
      title: 'Smarter Insights, Better Care',
      desc: 'Enhance your care Journeys. Care assists don’t just assist—they learn to improve your care journeys',
      moreDesc: "By continuously analyzing care seeker interactions and operational data, they surface actionable insights that help improve care delivery and overall experience. From identifying communication gaps to optimizing workflows, these assistants empower your team to make informed decisions that lead to more personalized, efficient, and satisfying care.",
      image: '/images/banner_04.png'
    },
    {
      title: 'Get Started Today',
      desc: 'Register and Create Your Own Care Assists Today! Ready to build your own Care Assist and start growing your practice?',
      moreDesc: "Start by registering an account—it’s quick and easy. Once you're signed up, you'll be guided through a step-by-step process to create and customize your assistant to fit your needs.",
      image: '/images/banner_02.png'
    }
  ];

  return (
    <section className="container mx-auto px-4 mt-8 lg:mt-16 mb-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="hero-swiper pb-12"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="text-center pt-5">
        <a href="/careassist" className="mt-1 inline-flex items-center gap-2 bg-[#e867e6] hover:bg-[#8967ef] text-white px-6 py-3 rounded-full font-medium transition-colors">
          Get Started <FaArrowRight />
        </a>
      </div>
    </section>
  );
}

function SlideContent({ slide }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-7/12 px-3 md:px-0">
        <figcaption className="relative">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4C74F6] via-[#E253E5] to-[#FF7E30]">
            {slide.title}
          </h1>
          <p className="text-lg">
            {slide.desc}
            <button 
              onClick={() => setShowMore(!showMore)}
              className="ml-2 text-[#794134] underline bg-transparent border-none cursor-pointer hover:text-red-700"
            >
              {showMore ? 'Less' : 'More'}
            </button>
          </p>
          {showMore && (
            <p className="mt-3 text-gray-700 transition-all duration-300 ease-in-out">
              {slide.moreDesc}
            </p>
          )}
        </figcaption>
      </div>
      <div className="md:w-5/12 mt-6 md:mt-0">
        <img src={slide.image} className="block w-full h-auto" alt={slide.title} />
      </div>
    </div>
  );
}
