import React from 'react';
import styled from 'styled-components';

export const Movie = ({ movie }) => {
  const { id, poster_path, title } = movie;
  const prefix = 'https://image.tmdb.org/t/p/w500';

  return (
    <MovieWrapper id='movie' key={id}>
      <MoviePoster src={`${prefix}${poster_path}`}></MoviePoster>
      <MovieDescription>{title}</MovieDescription>
    </MovieWrapper>
  );
};

export default Movie;

const MovieWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
  transition: transform ease 0.3s;
  &:hover {
    transform: scale(1.08);
  }
`;
const MoviePoster = styled.img`
  width: 150px;
`;
const MovieDescription = styled.h2``;
