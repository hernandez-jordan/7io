import React from "react";
import CyberSecurity from './CyberSecurity';
import DataStorage from './DataStorage';
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