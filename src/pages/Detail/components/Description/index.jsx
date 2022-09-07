import React from 'react';

import CastInfo from '../CastInfo';

// CSS
import * as S from './style';

const Description = ({ title, overview, genres, vote_average }) => {
  return (
    <S.MovieDescription>
      <h1 className="movie-title">{title}</h1>
      <S.GenreContainer>
        {genres?.map(genre => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </S.GenreContainer>
      <p className="overview">{overview}</p>
      <CastInfo />
    </S.MovieDescription>
  );
};

export default Description;
