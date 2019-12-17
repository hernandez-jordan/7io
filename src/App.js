import React from 'react';
import './App.css';
import HeroBanner from './HeroBanner/HeroBanner';
import MainFOE from './main/MainFOE';
import Nav from './Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <HeroBanner />
      <MainFOE />
    </div>
  );
}

export default App;
