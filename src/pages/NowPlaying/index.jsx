import React, { useState, useEffect } from 'react';
import Layout from 'layout';
import NowPlayingCard from './componenets/Card/NowPlayingCard';
import * as S from './style';
import Loading from '@components/Loading2/index';
import InfiniteScroll from 'react-infinite-scroller';
import * as MovieAPI from '../../api/movieApi';
import { useQuery } from '@tanstack/react-query';

const NowPlaying = () => {
  const [nowPlayList, setNowPlayList] = useState();
  useEffect(() => {
    MovieAPI.getNowPlayingMovie(1)
      .then(res => setNowPlayList(res.results))
      .catch(error => console.log(error));
  }, []);

  const loadMore = async page => {
    await MovieAPI.getNowPlayingMovie(page).then(res => {
      setNowPlayList([...nowPlayList, ...res.results]);
    });
  };

  const voteAverageSort = () => {
    const result = nowPlayList.sort((a, b) => b.vote_average - a.vote_average);
    setNowPlayList([...result]);
  };

  const voteCountSort = () => {
    const result = nowPlayList.sort((a, b) => b.vote_count - a.vote_count);
    setNowPlayList([...result]);
  };

  const { isLoading } = useQuery(['nowplaying'], () => MovieAPI.getNowPlayingMovie(), {
    staleTime: 30000,
  });

  // const { data: videoData } = useQuery(['videos'], () => MovieAPI.movieVideos(movie_id), {});

  // const { data: creditData } = useQuery(['credits'], () => movieApi.movieCredits(movie_id), {});

  return (
    <Layout>
      <S.NowPlayingBox>
        <S.NowPlayingHeaders>
          <S.HeaderTitle>현재상영작</S.HeaderTitle>
          <S.HeaderButton>
            <S.RateButton variant="contained" onClick={voteAverageSort}>
              평점순
            </S.RateButton>
            <S.CountButton variant="contained" onClick={voteCountSort}>
              인기순
            </S.CountButton>
          </S.HeaderButton>
        </S.NowPlayingHeaders>
        <InfiniteScroll pageStart={1} loadMore={loadMore} hasMore={true} loader={<Loading />}>
          <S.CardBox>
            {isLoading ? (
              <Loading />
            ) : (
              nowPlayList?.map(nowPlay => {
                return <NowPlayingCard nowPlay={nowPlay} />;
              })
            )}
          </S.CardBox>
        </InfiniteScroll>
      </S.NowPlayingBox>

      <Loading />
    </Layout>
  );
};

export default NowPlaying;
