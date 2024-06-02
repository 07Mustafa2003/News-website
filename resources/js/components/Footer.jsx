// resources/js/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 p-4 text-white text-center flex flex-col md:flex-row justify-between items-center">
      <div className="mb-2 md:mb-0">
        <p>&copy; 2024 ExpressoNews. All rights reserved.</p>
      </div>
      <div>
        <a href="/privacy-policy" className="text-white hover:underline mx-2">Privacy Policy</a>
        <a href="/terms-of-service" className="text-white hover:underline mx-2">Terms of Service</a>
        <a href="/contact" className="text-white hover:underline mx-2">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
