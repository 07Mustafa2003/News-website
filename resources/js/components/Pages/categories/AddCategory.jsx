// resources/js/components/AddCategory.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddCategory = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/categories', { name });
      alert('Category added successfully');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Add Category</h2>
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
