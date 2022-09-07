import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchKeyword } from './api/searchapi';
import MovieCard from './components/MovieCard';
import Layout from 'layout';
import * as S from './style';

const Search = () => {
  const {
    state: { searchWord },
  } = useLocation();
  const [word, setWord] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    if (searchWord) {
      setWord(searchWord);
    }
    (async () => {
      if (word !== '') {
        const { results } = await getSearchKeyword(word);
        setSearchMovies(results);
      }
    })();
  }, [searchWord, word]);

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
