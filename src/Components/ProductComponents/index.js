import React from "react";
import CyberSecurity from '../ProductComponents/CyberSecurity';
import DataStorage from '../ProductComponents/DataStorage';
import ContactForm from '../../ContactForm';
import ProductBanner from '../../HeroBanner/ProductBanner';

const ProductSections = () => {
  return (
        <>
          <ProductBanner />
          <DataStorage />
          <CyberSecurity />
          <ContactForm />
        </>
  );
}

export default ProductSections;