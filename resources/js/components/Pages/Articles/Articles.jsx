// resources/js/components/Articles.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  const fetchArticles = async (page) => {
    try {
      const response = await axios.get(`/articles?page=${page}`);
      setArticles(response.data.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Articles</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/2 py-2">Title</th>
              <th className="w-1/2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="border px-4 py-2">{article.title}</td>
                <td className="border px-4 py-2">
                  <Link to={`/dashboard/edit-article/${article.id}`} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</Link>
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

export default Articles;
