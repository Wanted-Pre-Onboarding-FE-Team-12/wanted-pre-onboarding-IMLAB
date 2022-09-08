import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

function MovieCards({ movieImage, movieId, movieName, movieRelease }) {
  return (
    <Card>
      <Link to={`/movie/${movieId}`}>
        {movieImage ? (
          <img style={{ width: '100%' }} src={movieImage} alt={movieName} />
        ) : (
          <NoImage>no Image</NoImage>
        )}

        <MovieInfo>{movieName}</MovieInfo>
        <MovieInfo>{movieRelease}</MovieInfo>
      </Link>
    </Card>
  );
}

const NoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
  background-color: black;
  font-size: 20px;
`;

const MovieInfo = styled.p`
  text-align: center;
`;

const Card = styled.div`
  margin: 50px;
  font-size: 13px;
  width: 210px;
`;

export default MovieCards;
