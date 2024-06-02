// resources/js/components/layouts/MainLayout.jsx
import React from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
