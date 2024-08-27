import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Herosection from '../components/Herosection';
import Secondsection from '../components/Secondsection';
import Thirdsection from '../components/Thirdsection';
import Fourthsection from '../components/Fourthsection';
import Fifthsection from '../components/Fifthsection';
import Sixthsection from '../components/Sixthsection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Herosection />
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
      <Sixthsection/>
      <Footer/>
    </>
  );
}

export default HomePage;
