import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {  FaUserCircle, FaGlobe } from 'react-icons/fa';
import axios from 'axios';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  useEffect(() => {
    axios.get('/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <header className="bg-white-600 p-4 text-black flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/images/ExpressoNewsLogo.png" alt="Logo" className="h-8 " />
       
      </div>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="px-4">Home</Link>
        <div className="relative">
          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="px-4"
          >
            Categories
          </button>
          {categoriesOpen && (
            <div className="absolute bg-white text-black rounded shadow mt-2">
              {categories.map(category => (
                <Link
                  key={category.id}
                  to={`/categories/${category.id}`}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center px-4"
          >
            <FaUserCircle className="text-2xl" />
          </button>
          {profileOpen && (
            <div className="absolute right-0 bg-white text-black rounded shadow mt-2">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link>
              <Link to="/register" className="block px-4 py-2 hover:bg-gray-200">Register</Link>
              <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link>
            </div>
          )}
        </div>
        <button className="flex items-center px-4">
          <FaGlobe className="text-2xl" />
          <span className="ml-2">EN</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
