import React from "react";
import AboutBanner from '../../HeroBanner/AboutBanner';
import Team from './Team';
import FooterBanner from './FooterBanner';



const AboutSections = () => {
  return (
    <>
      <AboutBanner />
      <Team />
      <FooterBanner />
    </>
  );
}

export default AboutSections;