import AccordionItem from '../ui/AccordionItem';

export default function CarePractitioner() {
  const items = [
    {
      title: 'Smart Engagement',
      icon: <img src="/images/icon_professionals.png" alt="icon_professionals" className="w-16 h-16 md:w-20 md:h-20" />,
      content: 'Activate CareAssists to guide patients through personalized, conversational care journeys—supporting their needs during visits and between visits. Over time, CareAssists learn from interactions, continuously improving the quality and relevance of care.'
    },
    {
      title: 'Boost Your Ratings',
      icon: <img src="/images/icon_professionals.png" alt="icon_professionals" className="w-16 h-16 md:w-20 md:h-20" />,
      content: 'Use CareAssists for enhancing digital touchpoints, tailored care plans, and remote follow-ups—without adding administrative overhead.'
    },
    {
      title: 'Secure and Compliant',
      icon: <img src="/images/icon_professionals.png" alt="icon_professionals" className="w-16 h-16 md:w-20 md:h-20" />,
      content: 'Designed with healthcare-grade privacy and security, CareAssists deliver both trust and reliability.'
    },
    {
      title: 'Enhance Care Quality',
      icon: <img src="/images/icon_professionals.png" alt="icon_professionals" className="w-16 h-16 md:w-20 md:h-20" />,
      content: 'By streamlining workflows and reducing administrative load, CareAssists improve care experiences for both care seekers and care practitioners.'
    },
    {
      title: 'Data-Driven, Value-Based Care',
      icon: <img src="/images/icon_professionals.png" alt="icon_professionals" className="w-16 h-16 md:w-20 md:h-20" />,
      content: 'CareAssists unify and surface relevant data to support informed, proactive decision-making.'
    },
    {
      title: 'Cost Savings',
      icon: <img src="/images/icon_professionals.png" alt="icon_professionals" className="w-16 h-16 md:w-20 md:h-20" />,
      content: 'By automating administrative tasks and optimizing care delivery, CareAssists help reduce operational costs, freeing up resources for more productive tasks.'
    }
  ];

  return (
    <section id="Onboard" className="py-12 bg-gray-50 bg-opacity-50">
      <div className="container mx-auto px-4 my-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#4C74F6] via-[#E253E5] to-[#FF7E30] inline-block mb-4">
            Are you a care practitioner ?
          </h1>
          <h4 className="text-xl font-medium text-gray-700">Click here to start engaging CareAssists in your organization to improve care.</h4>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              title={item.title} 
              icon={item.icon}
              isOpenDefault={index === 0}
            >
              <p>{item.content}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
