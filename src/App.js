// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import MovieDescription from './components/MovieDescription/MovieDescription';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/movie" element={<MovieDescription/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
