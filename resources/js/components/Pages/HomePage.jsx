// resources/js/components/Pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map(article => (
          <div key={article.article_id} className="p-4 border rounded">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
