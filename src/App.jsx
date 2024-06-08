import React, { useRef, useState } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Order from './components/Order/Order';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const [showOrder, setShowOrder] = useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const close_form = () => {
    setShowOrder(false);
  };

  const order_pop = () => {
    setShowOrder(true);
  };

  return (
    <div className='app_all'>
      <Header scrollToSection={scrollToSection} aboutRef={aboutRef} homeRef={homeRef} contactRef={contactRef} order_pop={order_pop} />
      {showOrder && <Order close_form={close_form} />}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

