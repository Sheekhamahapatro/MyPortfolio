import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="portfolio-page m-0 flex min-h-screen flex-col gap-0 overflow-x-hidden bg-[var(--bg)] p-0">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
