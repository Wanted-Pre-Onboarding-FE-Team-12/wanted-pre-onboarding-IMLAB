import React from 'react';

function MovieCards({ movieImage, movieId, movieName, movieRelease }) {
  return (
    <div>
      <img src={movieImage} alt={movieName} />
      <p>{movieName}</p>
      <p>{movieRelease}</p>
    </div>
  );
}

export default MovieCards;
