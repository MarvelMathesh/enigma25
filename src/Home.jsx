import { useState } from 'react';
import './App.css';
import Hamburger from './components/hamburger';
import Footer from './components/footer';
import MovableSquare from './components/cursor';
import BackgroundEffect from './components/background-hover';
import Timeline from './components/timeline';
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MovableSquare /> */}
      <Timeline/>
      <Hamburger />
      <div className='text-4xl font-calcio text-left px-4'>ENIGMA</div>
      <Footer />
      {/* <BackgroundEffect /> */}
    </>
  );
}

export default Home;