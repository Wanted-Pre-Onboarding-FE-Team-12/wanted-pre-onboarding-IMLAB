import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovie } from '@api/movieApi';
import MovieCard from './components/MovieCard';
import Layout from 'layout';
import * as S from './style';

const Search = () => {
  const {
    state: { searchWord },
  } = useLocation();
  const [word, setWord] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    if (searchWord) {
      setWord(searchWord);
    }
  }, [searchWord]);

  useEffect(() => {
    const getSearchMovie = async () => {
      if (word !== '') {
        let { page, results } = await searchMovie(word, currentPage);
        setSearchMovies(results);
        setPage(++page);
      }
    };
    getSearchMovie();
  }, [word]);

  return (
    <Layout>
      {searchMovies.length === 0 && <h3>Loading... :)</h3>}
      <S.MovieContainer>
        {searchMovies?.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </S.MovieContainer>
    </Layout>
  );
};

export default Search;
