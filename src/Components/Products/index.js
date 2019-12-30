import React from "react";
import DataStorage from './DataStorage';
import ContactForm from '../../ContactForm';
import ProductBanner from '../../HeroBanner/ProductBanner';

const ProductSections = () => {
  return (
    <>
      <ProductBanner />
      <DataStorage />
      <ContactForm />
    </>
  );
}

export default ProductSections;