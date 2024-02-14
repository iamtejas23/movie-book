// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SearchPage from '../../components/SearchPage/SearchPage';

const API_KEY = 'ba862f0c';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="home">
      <div className="banner">
        <h1>Welcome to Movie Hub</h1>
        <p>Discover the latest movies and book your tickets now!</p>

        {/* Seaerch section */}
        <SearchPage/>

      </div>
      <div className="featured-movies">
        <h2>Featured Movies</h2>
        <div className="movie-container">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Add more sections for different genres */}
    </div>
  );
};

export default Home;
