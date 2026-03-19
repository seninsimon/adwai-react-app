import HeroCarousel from '../components/home/HeroCarousel';
import WhatWeDo from '../components/home/WhatWeDo';
import WhatWeOffer from '../components/home/WhatWeOffer';
import CarePractitioner from '../components/home/CarePractitioner';
import WhyPartner from '../components/home/WhyPartner';
import Pricing from '../components/home/Pricing';
import CustomPlans from '../components/home/CustomPlans';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <WhatWeDo />
      <WhatWeOffer />
      <CarePractitioner />
      <WhyPartner />
      <Pricing />
      <CustomPlans />
    </>
  );
}
