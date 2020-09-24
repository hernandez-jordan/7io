import React from "react";
import MainOne from '../Home/MainOne';
import MainTwo from '../Home/MainTwo';
import PartnersSlider from '../Home/PartnersSlider';
import ContactForm from '../ContactForm/index';
import HeroBanner from '../../HeroBanner';

const HomeSections = () => {
  return (
        <>
          <HeroBanner />
          <MainOne />
          <MainTwo />
          <PartnersSlider />
          <ContactForm />
        </>
  );
}

export default HomeSections;