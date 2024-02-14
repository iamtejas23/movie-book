// MovieDescription.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDescription.css';

const API_KEY = 'ba862f0c';

const MovieDescription = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-description">
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
    </div>
  );
};

export default MovieDescription;
