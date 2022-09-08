import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import Layout from 'layout';
import * as movieDetailApi from '@api/movieDetailApi';
import { IMAGE_BASE_URL } from '@utils/links';
import InfoContainer from './components/InfoContainer';
import Loading from '@components/Loading2';

// CSS
import * as S from './style';

const Detail = () => {
  const { id: movieId } = useParams();

  const {
    data: movieData,
    status,
    isFetching,
  } = useQuery(['movie', movieId], () => movieDetailApi.getMovieDetail(movieId), {
    retry: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { backdrop_path, poster_path, title, overview, genres, vote_average } = movieData || {};

  return (
    <Layout>
      <S.DetailWrapper>
        {isFetching && <Loading />}
        {status === 'success' && (
          <>
            <S.BannerWrapper>
              <S.Banner url={`${IMAGE_BASE_URL}${backdrop_path || poster_path}`} />
            </S.BannerWrapper>

            <InfoContainer
              backdrop_path={backdrop_path}
              poster_path={poster_path}
              title={title}
              overview={overview}
              genres={genres}
              vote_average={vote_average}
              movieId={movieId}
            />
          </>
        )}
      </S.DetailWrapper>
    </Layout>
  );
};

export default Detail;
