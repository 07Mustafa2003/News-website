// resources/js/components/layouts/AuthLayout.jsx
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="w-full h-full bg-white shadow-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
