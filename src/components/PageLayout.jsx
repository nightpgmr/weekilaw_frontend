import React, { useRef } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const PageLayout = ({ children, className = 'layout_main__DUFC2', ...rest }) => {
  const mainRef = useRef(null);

  return (
    <main ref={mainRef} className={className} {...rest}>
      <Header scrollElement={mainRef} />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;

