import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from 'layout';
import styled from 'styled-components';
import { getPopularMovie } from '@api/movieApi.js';
import Movie from './Components/Movie';
import MainThumbnail from './Components/MainThumbnail';

const Home = () => {
  const navigate = useNavigate();
  const [popularMovies, setPopularMovies] = useState([]);

  async function setMoviesList() {
    const popularRaw = await getPopularMovie(1);
    setPopularMovies(popularRaw.results);
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
