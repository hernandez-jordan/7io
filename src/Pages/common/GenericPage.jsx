import React from 'react';
import Nav from '../../Nav';
import Footer from '../../Footer';

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
