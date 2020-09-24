import React from 'react';
import Nav from '../../Nav';
import Footer from '../../Components/Footer/index';

const GenericPage = props => {
    return (
      <>
        <Nav />
          {props.children}
        <Footer />
      </>
    );
}

export default GenericPage;
