import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import * as movieDetailApi from '@api/movieDetailApi';
import imgConfig from '@utils/imgConfig';

// CSS
import * as S from './style';

const CastInfo = () => {
  const { id: movieId } = useParams();
  const { data: castData } = useQuery(
    ['cast', movieId],
    () => movieDetailApi.getMovieCredits(movieId),
    {
      retry: 1,
    },
  );

  const filteredData = castData?.cast.slice(0, 5);

  return (
    <S.CastWrapper>
      {filteredData?.map(cast => (
        <S.profileCard key={cast.id}>
          <img className="actorImg" src={imgConfig.w500Image(cast.profile_path)} alt="actor" />
          <span className="actorName">{cast.name}</span>
        </S.profileCard>
      ))}
    </S.CastWrapper>
  );
};

export default CastInfo;
