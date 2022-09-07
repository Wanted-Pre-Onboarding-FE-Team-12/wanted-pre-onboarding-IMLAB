import React from 'react';
import Layout from 'layout';
import { getPopularMovie } from './popularApi';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Components/Movie';
import MainThumbnail from './Components/MainThumbnail';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  async function setMoviesList() {
    const popularMovies = await getPopularMovie();
    setPopularMovies(popularMovies);
  }

  useEffect(() => {
    setMoviesList();
  }, []);

  function getMainMovie() {
    if (!popularMovies.length) {
      return '';
    } else {
      const prefix = 'https://image.tmdb.org/t/p/w500';
      return prefix + popularMovies[0].backdrop_path;
    }
  }

  function handlePopularMovieListClick(event) {
    if (event.target.parentNode.id === 'movie') {
      // 클릭 이벤트: 상세 페이지 이동 or 상세 정보 보이기
    }
  }
  return (
    <Layout>
      <HomeWrapper>
        <MainThumbnail src={getMainMovie()} />
        <h1>Popular Movies</h1>
        <PopularMovies onClick={handlePopularMovieListClick}>
          {popularMovies?.map(movie => (
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
`;
const PopularMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
