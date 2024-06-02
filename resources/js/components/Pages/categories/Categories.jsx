// resources/js/components/Categories.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCategories(page);
  }, [page]);

  const fetchCategories = async (page) => {
    try {
      const response = await axios.get(`/categories?page=${page}`);
      setCategories(response.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Categories</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/2 py-2">Name</th>
              <th className="w-1/2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="border px-4 py-2">{category.name}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-gray-500 text-white px-4 py-2 rounded">
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} className="bg-gray-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Categories;
