import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function url(path) {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:5000${path}`
    : path;
}

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(url('/api/'))
      .then((res) => res.json())
      .then((apiData) => setData(apiData.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>API Data: {data}</header>
    </div>
  );
}

export default App;
