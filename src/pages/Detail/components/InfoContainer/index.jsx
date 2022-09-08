import React from 'react';

import Description from '../Description';
import TrailerButton from '../TrailerButton';
import imgConfig from '@utils/imgConfig';

// CSS
import * as S from './style';

const InfoContainer = ({
  movieId,
  backdrop_path,
  poster_path,
  title,
  overview,
  genres,
  vote_average,
}) => {
  return (
    <S.MovieInfoWrapper>
      <div>
        <img src={imgConfig.w500Image(poster_path || backdrop_path)} alt="poster" />
        <TrailerButton movieId={movieId} />
      </div>
      <Description title={title} overview={overview} genres={genres} vote_average={vote_average} />
    </S.MovieInfoWrapper>
  );
};

export default InfoContainer;
