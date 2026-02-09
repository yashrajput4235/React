import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div key={movie.id} className="movie-card hover_effect">
      <img src={movie.poster_path} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
