import React from "react";
import MainOne from '../HomeComponents/MainOne';
import MainTwo from '../HomeComponents/MainTwo';
import PartnersSlide from '../HomeComponents/Partners';
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