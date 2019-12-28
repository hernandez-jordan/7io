import React from "react";
import MainOne from '../Home/MainOne';
import MainTwo from '../Home/MainTwo';
import PartnersSlide from '../Home/Partners';
import ContactForm from '../../ContactForm';
import HeroBanner from '../../HeroBanner';

const HomeSections = () => {
  return (
        <>
          <HeroBanner />
          <MainOne />
          <MainTwo />
          <PartnersSlide />
          <ContactForm />
        </>
  );
}

export default HomeSections;