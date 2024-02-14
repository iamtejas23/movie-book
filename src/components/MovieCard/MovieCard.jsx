// MovieCard.js
import React from 'react';

const MovieCard = ({ movie, showDescription }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
        onClick={() => showDescription(movie.imdbID)}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => showDescription(movie.imdbID)}>More</button>
    </div>
  );
};

export default MovieCard;
