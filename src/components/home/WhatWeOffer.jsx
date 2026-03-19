import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export default function WhatWeOffer() {
  const onboardAssists = [
    {
      title: 'Find Care Assist',
      img: '/images/banner_04.png',
      desc: 'Find Care Assist helps patients quickly identify the most suitable care practitioners based on their specific needs and preferences. Through conversational guidance, it simplifies the process of finding relevant services, making care more accessible and personalized. This tool ensures that patients are matched with the right providers, enhancing the quality of care from the very beginning.'
    },
    {
      title: 'Book Assist',
      img: '/images/banner_03.png',
      desc: 'Book Care Assist streamlines the appointment scheduling and onboarding process through conversational booking integrated with scheduling systems. It guides patients step-by-step to confirm appointments and complete necessary onboarding forms or checks. This ensures a seamless transition into care, reducing delays and administrative hassle.'
    }
  ];

  const journeyAssists = [
    {
      title: 'Prep Assist',
      img: '/images/banner_02.png',
      desc: 'Prep for Care Assist collects, organizes, and summarizes key patient data before consultations. By gathering medical history, lab results, and other relevant information, it equips practitioners with a complete view of the patient. This enables more focused, informed care and reduces time spent on manual data review.'
    },
    {
      title: 'Check-In Assist',
      img: '/images/banner_01.png',
      desc: 'Check-In Assist simplifies the check-in process for patients arriving for care. Whether virtual or in-person, it provides an easy, guided experience for verifying information, confirming appointments, and preparing patients for their visit. It reduces wait times and enhances patient satisfaction.'
    },
    {
      title: 'Treatment Plan Assist',
      img: '/images/banner_01.png',
      desc: 'Treatment Plan Assist helps practitioners generate personalized care plans based on real-world evidence and patient conditions. It may recommend drugs, therapies, or care pathways tailored to individual needs. This tool supports evidence-based decision-making and enhances care precision.'
    },
    {
      title: 'Navigation Assist',
      img: '/images/banner_01.png',
      desc: 'Journey navigation and Follow-Up Assist automates post-care engagement by tracking recovery, collecting feedback, and offering lifestyle and medication support. It ensures patients stay connected to their care teams and receive continuous guidance. This improves outcomes, boosts adherence, and fosters a sense of ongoing care.'
    }
  ];

  const carouselSettings = {
    modules: [Pagination, Autoplay],
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 }
    },
    pagination: { clickable: true },
    autoplay: { delay: 4000, disableOnInteraction: false },
    className: "pb-12"
  };

  return (
    <section id="services" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#4C74F6] via-[#E253E5] to-[#FF7E30] inline-block">
            What we offer?
          </h1>
        </div>

        <div className="mb-12">
          <h4 className="text-2xl font-semibold mb-6">Onboard Assists</h4>
          <Swiper {...carouselSettings}>
            {onboardAssists.map((assist, index) => (
              <SwiperSlide key={`onboard-${index}`} className="h-auto">
                <AssistCard assist={assist} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-semibold mb-6">Journey Assists</h4>
          <Swiper {...carouselSettings}>
            {journeyAssists.map((assist, index) => (
              <SwiperSlide key={`journey-${index}`} className="h-auto">
                <AssistCard assist={assist} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-10">
          <a href="http://journeys.adwai.com/" className="inline-flex items-center gap-2 bg-[#e867e6] hover:bg-[#8967ef] text-white px-6 py-3 rounded-full font-medium transition-colors">
            More <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

function AssistCard({ assist }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 h-full bg-white hover:shadow-md transition-shadow">
      <div className="bg-[#f2f4ff] rounded-xl p-5 h-full flex flex-col items-center text-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-3 sm:p-4 border border-gray-200 mb-4 shrink-0 shadow-sm">
          <img src={assist.img} alt={assist.title} className="w-full h-full object-contain" />
        </div>
        <div className="font-semibold text-lg mb-3 text-gray-800">{assist.title}</div>
        <p className="text-sm text-gray-600 grow text-justify leading-relaxed">
          {assist.desc}
        </p>
      </div>
    </div>
  );
}
