// resources/js/components/Dashboard.jsx
import React from 'react';
import { FaHome, FaUser, FaFileAlt, FaSignOutAlt, FaTags, FaPlus } from 'react-icons/fa';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardHome from './DashboardHome';
import Articles from './Pages/Articles/Articles';
import AddArticle from './Pages/Articles/AddArticle';
import EditArticle from './Pages/Articles/EditArticle';
import Categories from './Pages/categories/Categories';
import AddCategory from './Pages/categories/AddCategory';
import EditCategory from './Pages/categories/EditCategory';
import Authors from './Pages/Authors/Authors';
import AddAuthor from './Pages/Authors/AddAuthor';
import EditAuthor from './Pages/Authors/EditAuthor';

const Dashboard = () => {
  return (
    <div className=" flex">
      <aside className="bg-blue-800 text-white ">
        <div className="text-center">
          <img src="/images/ExpressoNewsLogo.png" alt="Logo" className="h-12 mx-auto" />
          <h1 className="text-xl font-bold mt-2">ExpressoNews</h1>
        </div>
        <nav className="flex flex-col space-y-2">
          <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/dashboard/articles" className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded">
            <FaFileAlt />
            <span>Articles</span>
          </Link>
          <Link to="/dashboard/add-article" className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded">
            <FaPlus />
            <span>Add Article</span>
          </Link>
          <Link to="/dashboard/categories" className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded">
            <FaTags />
            <span>Categories</span>
          </Link>
          <Link to="/dashboard/add-category" className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded">
            <FaPlus />
            <span>Add Category</span>
          </Link>
          <Link to="/dashboard/authors" className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded">
            <FaUser />
            <span>Authors</span>
          </Link>
          <Link to="/dashboard/add-author" className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded">
            <FaPlus />
            <span>Add Author</span>
          </Link>
          <Link to="/logout" className="flex items-center space-x-2 p-2 hover:bg-blue-600 rounded">
            <FaSignOutAlt />
            <span>Logout</span>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/add-article" element={<AddArticle />} />
          <Route path="/edit-article/:id" element={<EditArticle />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/edit-category/:id" element={<EditCategory />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/add-author" element={<AddAuthor />} />
          <Route path="/edit-author/:id" element={<EditAuthor />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
