import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from 'layout';
import styled from 'styled-components';
import { getPopularMovie } from '@api/movieApi.js';
import Movie from './Components/Movie';
import MainThumbnail from './Components/MainThumbnail';
import { useQuery } from '@tanstack/react-query';
import Loading from '@components/Loading2';

const Home = () => {
  const THUMBNAIL_NUM = 3;
  const navigate = useNavigate();

  let page = 1;
  const {
    data: popularMovies,
    error,
    isError,
    isLoading,
  } = useQuery(['popularMovies.results', page], async () => {
    const results = await getPopularMovie(page);
    return results;
  });

  if (isLoading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }
  if (isError) {
    return (
      <Layout>
        <h1>에러가 발생했습니다. {error}</h1>
      </Layout>
    );
  }

  function getMainMovie() {
    if (!popularMovies.results.length) {
      return '';
    } else {
      const prefix = 'https://image.tmdb.org/t/p/w500';
      return prefix + popularMovies.results[THUMBNAIL_NUM].backdrop_path;
    }
  }

  const goToDetail = id => {
    navigate(`movie/:${id}`, { state: id });
  };

  function handlePopularMovieListClick(event) {
    if (event.target.id !== '' && event.target.id === event.target.parentNode.id) {
      goToDetail(event.target.id);
    }
  }
  return (
    <Layout>
      <HomeWrapper>
        <MainThumbnail
          src={getMainMovie()}
          movie={popularMovies.results[THUMBNAIL_NUM] ? popularMovies.results[THUMBNAIL_NUM] : ''}
        />
        <h1>Popular Movies</h1>
        <PopularMovies onClick={handlePopularMovieListClick}>
          {popularMovies.results?.map(movie => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </PopularMovies>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;

const HomeWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 3rem;
  }
`;
const PopularMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
`;
