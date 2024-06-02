// resources/js/components/AddAuthor.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddAuthor = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/authors', { name });
      alert('Author added successfully');
    } catch (error) {
      console.error('Error adding author:', error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Add Author</h2>
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Author</button>
      </form>
    </div>
  );
};

export default AddAuthor;
