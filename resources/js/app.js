import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout.jsx';
import AuthLayout from './components/layouts/AuthLayout.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import HomePage from './components/Pages/HomePage.jsx';

import BusinessPage from './components/Pages/BusinessPage.jsx';
import CulturePage from './components/Pages/CulturePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
        <Route path="/dashboard" element={<AuthLayout><Dashboard /></AuthLayout>} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
         
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/culture" element={<CulturePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
