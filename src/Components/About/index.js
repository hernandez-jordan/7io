import React from "react";
import AboutBanner from '../../HeroBanner/AboutBanner';
import AboutIntro from './AboutIntro';
import Team from './Team';
import FooterBanner from './FooterBanner';



const AboutSections = () => {
  return (
    <>
      <AboutBanner />
      <AboutIntro />
      <Team />
      <FooterBanner />
    </>
  );
}

export default AboutSections;