import React from 'react';
import './App.css';
import HeroBanner from './HeroBanner/HeroBanner';
import MainOne from './main/MainOne';
import MainTwo from './main/MainTwo';
import Nav from './Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <HeroBanner />
      <MainOne />
      <MainTwo />
    </div>
  );
}

export default App;
