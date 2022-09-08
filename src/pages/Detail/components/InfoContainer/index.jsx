import React from 'react';

import { W500_IMAGE_URL } from '@utils/links';
import Description from '../Description';
import TrailerButton from '../TrailerButton';

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
      <div className="post-container">
        <img src={`${W500_IMAGE_URL}${poster_path || backdrop_path}`} alt="poster" />
        <TrailerButton movieId={movieId} />
      </div>
      <Description title={title} overview={overview} genres={genres} vote_average={vote_average} />
    </S.MovieInfoWrapper>
  );
};

export default InfoContainer;
