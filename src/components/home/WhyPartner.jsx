import AccordionItem from '../ui/AccordionItem';

export default function WhyPartner() {
  const items = [
    {
      title: 'Collaborate on Customization that Delivers Real Impact',
      content: 'As a customization partner, you’ll work alongside us to adapt CareAssist to the unique needs of each care practice. Together, we’ll tailor workflows, care journeys, and integrations to ensure that every CareAssist deployment drives measurable value for care seekers and care teams alike.'
    },
    {
      title: 'Lead Seamless Implementations',
      content: 'Implementation partners play a key role in bringing CareAssist to life in real-world care settings. We provide you with the tools, training, and support needed to ensure fast, efficient rollouts—with minimal disruption and maximum adoption. Your success is our shared priority.'
    },
    {
      title: 'Expand Reach Through Integrated Solutions',
      content: 'Whether you\'re offering complementary tools, services, or platforms, partnering with us means unlocking cross-sell opportunities. Extend the value of CareAssist by integrating your solutions, helping care practices deliver more connected, efficient, and personalized care experiences to their care seekers.'
    },
    {
      title: 'Be Part of a Growing Ecosystem',
      content: 'Join a partner ecosystem that’s focused on innovation in care delivery. Together, we’ll drive smarter engagement, better outcomes, and scalable solutions for care practices of all sizes—while creating new business opportunities along the way.'
    }
  ];

  return (
    <section className="whypartner py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4C74F6] via-[#E253E5] to-[#FF7E30] inline-block">
            Why Partner with Us ?
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              title={item.title} 
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
