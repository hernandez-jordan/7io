import React from 'react';
import HeroBanner from '../HeroBanner';
import ContactForm from '../ContactForm';
import GenericPage from '../Pages/common/GenericPage';


const Products = () => {
  return (
      <GenericPage>
        <HeroBanner />
        <ContactForm />
      </GenericPage>
  );
}

export default Products;
