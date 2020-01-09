import React from "react";
import ProductBanner from '../../HeroBanner/ProductBanner';
import DataStorage from './DataStorage';
import CyberSecurity from './CyberSecurity';
import Compliance from './Compliance';
import FooterBanner from './FooterBanner';



const ProductSections = () => {
  return (
    <>
      <ProductBanner />
      <DataStorage />
      <CyberSecurity />
      <Compliance />
      <FooterBanner />
    </>
  );
}

export default ProductSections;