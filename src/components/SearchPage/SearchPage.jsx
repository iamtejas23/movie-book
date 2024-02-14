// SearchPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';

const API_KEY = 'ba862f0c';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [query]);

  const calculateCardWidth = () => {
    if (movies.length <= 2) {
      return '50%';
    } else if (movies.length <= 3) {
      return '33.33%';
    } else if (movies.length <= 4) {
      return '25%';
    } else {
      return '20%';
    }
  };

  return (
    <div className="search-page">
      <h1>Search Movies</h1>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {movies.map((movie) => (
          <div className="search-result" key={movie.imdbID} style={{ width: calculateCardWidth() }}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
