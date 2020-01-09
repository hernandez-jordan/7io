import React from "react";
import ServicesBanner from '../../HeroBanner/ServicesBanner';
import AllServices from './AllServices';
import FooterBanner from './FooterBanner';



const ServicesSections = () => {
  return (
    <>
      <ServicesBanner />
      <AllServices />
      <FooterBanner />
    </>
  );
}

export default ServicesSections;