import React from 'react';
import styled from 'styled-components';

export const Movie = ({ movie }) => {
  const { id, poster_path, title, original_title, vote_average } = movie;
  const prefix = 'https://image.tmdb.org/t/p/w500';
  return (
    <MovieWrapper id={id} key={id}>
      <MoviePoster id={id} src={`${prefix}${poster_path}`}></MoviePoster>
      <h2 id={id} className={title}>
        {title}
      </h2>
      <h5 className={original_title}>{original_title}</h5>
      <h5 className={vote_average}>{`⭐${vote_average}`}</h5>
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
  height: 220px;
  margin-bottom: 1rem;
`;
