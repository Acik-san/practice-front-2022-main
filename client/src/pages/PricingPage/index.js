import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PricingPackages from '../../components/PricingComponents/PricingPackages';

const PricingPage = (props) => {
  return (
    <>
      <Header />
      <PricingPackages />
      <Footer />
    </>
  );
};

export default PricingPage;
