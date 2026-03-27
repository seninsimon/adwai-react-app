import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

export default function WhatWeOffer() {
  const assists = [
    {
      title: "Find Care Assist",
      img: "/images/banner_04.png",
      desc: "Find Care Assist helps patients quickly identify the most suitable care practitioners based on their specific needs and preferences. Through conversational guidance, it simplifies the process of finding relevant services, making care more accessible and personalized. This tool ensures that patients are matched with the right providers, enhancing the quality of care from the very beginning.",
    },
    {
      title: "Book Assist",
      img: "/images/banner_03.png",
      desc: "Book Care Assist streamlines the appointment scheduling and onboarding process through conversational booking integrated with scheduling systems. It guides patients step-by-step to confirm appointments and complete necessary onboarding forms or checks. This ensures a seamless transition into care, reducing delays and administrative hassle.",
    },
    {
      title: "Prep Assist",
      img: "/images/banner_02.png",
      desc: "Prep for Care Assist collects, organizes, and summarizes key patient data before consultations. By gathering medical history, lab results, and other relevant information, it equips practitioners with a complete view of the patient. This enables more focused, informed care and reduces time spent on manual data review.",
    },
    {
      title: "Check-In Assist",
      img: "/images/banner_01.png",
      desc: "Check-In Assist simplifies the check-in process for patients arriving for care. Whether virtual or in-person, it provides an easy, guided experience for verifying information, confirming appointments, and preparing patients for their visit. It reduces wait times and enhances patient satisfaction.",
    },
    {
      title: "Treatment Plan Assist",
      img: "/images/banner_01.png",
      desc: "Treatment Plan Assist helps practitioners generate personalized care plans based on real-world evidence and patient conditions. It may recommend drugs, therapies, or care pathways tailored to individual needs. This tool supports evidence-based decision-making and enhances care precision.",
    },
    {
      title: "Navigation Assist",
      img: "/images/banner_01.png",
      desc: "Journey navigation and Follow-Up Assist automates post-care engagement by tracking recovery, collecting feedback, and offering lifestyle and medication support. It ensures patients stay connected to their care teams and receive continuous guidance. This improves outcomes, boosts adherence, and fosters a sense of ongoing care.",
    },
  ];

  const carouselSettings = {
    modules: [Pagination, Autoplay],
    spaceBetween: 15,
    slidesPerView: 1,
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
    pagination: { clickable: true },
    autoplay: { delay: 4000, disableOnInteraction: false },
    className: "pb-12!",
  };

  return (
    <section id="services" className="py-10">
      <div className="container mx-auto px-4">
        
        {/* HEADING */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-[#1F2937]">
            What We Offer
          </h1>
        </div>

        {/* SINGLE CAROUSEL */}
        <div  >
          <Swiper  {...carouselSettings}>
          {assists.map((assist, index) => (
            <SwiperSlide key={index} className="h-auto">
              <AssistCard assist={assist} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
}

function AssistCard({ assist }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-[#D1D5DB] rounded-lg p-4 h-full bg-white hover:shadow-sm transition">
      <div className="bg-[#F9FAFB] rounded-lg p-5 h-full flex flex-col items-center text-center justify-between space-y-4">
        
        {/* IMAGE + TITLE */}
        <div>
          <div className="w-24 h-24 rounded-full bg-white p-3 border border-[#D1D5DB] mb-3 mx-auto">
            <img
              src={assist.img}
              alt={assist.title}
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="font-semibold text-base text-[#1F2937]">
            {assist.title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <div>
          <p
            className={`text-sm text-gray-600 text-justify leading-relaxed transition-all ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {assist.desc}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}