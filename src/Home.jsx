// import { useState } from 'react';
import './App.css';
import Hamburger from './components/hamburger';
import Footer from './components/footer';
import Join from './components/join';
// import MovableSquare from './components/cursor';
// import BackgroundEffect from './components/background-hover';
import Scene from './components/timelinetest';
// import Timeline from './components/timeline';
import ErtdfgcvbBG from './components/enigmatextbg';
import AnimatedText from './components/text';
import HeroSection from './components/HeroSection';
import Content from "./components/content.jsx";

function Home() {
  return (
    <div className='py-2'>
      {/* <div className="h-screen"></div> */}
      <Join className='z-20'/>
      
      <nav className="sticky top-0 flex justify-between w-full px-10 py-5 z-20 mix-blend-difference">
        <div className='text-5xl font-neuebit text-left pt-1'>ENIGMA</div>
        <Hamburger className='fixed right-0'/>
      </nav>

      <ErtdfgcvbBG className='z-0 top-0'/>
      <HeroSection/>
      <Content />

      <Scene className="fixed top-0"/>
        <Footer />
    </div>
  );
}

export default Home;
