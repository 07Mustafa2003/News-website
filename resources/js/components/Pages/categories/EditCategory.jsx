// resources/js/components/EditCategory.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditCategory = () => {
  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`/api/categories/${id}`);
      setName(response.data.name);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/categories/${id}`, { name });
      alert('Category updated successfully');
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Edit Category</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Category</button>
      </form>
    </div>
  );
};

export default EditCategory;
