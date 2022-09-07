import React from 'react';
import Layout from 'layout';
import { getPopularMovies } from './popularApi';
import { useState } from 'react';
import { useEffect } from 'react';

const Home =  () => {
  const [popularMovies, setPopularMovies] = useState([]);

  async function setMoviesList (){
    const popularMovies = await getPopularMovies();
    setPopularMovies(popularMovies);
  }

  useEffect(()=>{
    setMoviesList();
  },[])

  console.log(popularMovies)
  return <Layout>
    
  </Layout>;
};

export default Home;
