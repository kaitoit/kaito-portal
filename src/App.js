import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src="https://videos.pexels.com/video-files/30886113/13206249_2560_1440_60fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
