// resources/js/app.js
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
import AddArticle from './components/Pages/Articles/AddArticle.jsx';
import EditArticle from './components/Pages/Articles/EditArticle.jsx';
import AddCategory from './components/Pages/categories/AddCategory.jsx';
import EditCategory from './components/Pages/categories/EditCategory.jsx';
import AddAuthor from './components/Pages/Authors/AddAuthor.jsx';
import EditAuthor from './components/Pages/Authors/EditAuthor.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
        <Route path="/dashboard/*" element={<AuthLayout><Dashboard /></AuthLayout>}>
          <Route path="add-article" element={<AddArticle />} />
          <Route path="edit-article/:id" element={<EditArticle />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="edit-category/:id" element={<EditCategory />} />
          <Route path="add-author" element={<AddAuthor />} />
          <Route path="edit-author/:id" element={<EditAuthor />} />
        </Route>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="business" element={<BusinessPage />} />
          <Route path="culture" element={<CulturePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
