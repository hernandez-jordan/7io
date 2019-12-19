import React from 'react';
import './App.css';
import HeroBanner from './HeroBanner/HeroBanner';
import MainOne from './main/MainOne';
import MainTwo from './main/MainTwo';
import PartnersSlide from './main/Partners';
import ContactForm from './ContactForm/ContactForm';
import Nav from './Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <HeroBanner />
      <MainOne />
      <MainTwo />
      <PartnersSlide />
      <ContactForm />
    </div>
  );
}

export default App;
