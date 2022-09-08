import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { searchMovie } from '@api/movieApi';
import MovieCard from './components/MovieCard';
import Layout from 'layout';
import * as S from './style';

const Search = () => {
  const {
    state: { searchWord },
  } = useLocation();

  const { isLoading, isFetching, isError, error, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['searchMovies', searchWord],
      ({ pageParam = 1 }) => {
        return searchMovie(searchWord, pageParam);
      },
      {
        getNextPageParam: pageInfo => {
          return pageInfo.page < pageInfo.total_pages ? pageInfo.page + 1 : undefined;
        },
        refetchOnMount: true,
        refetchOnWindowFocus: false,
      },
    );

  if (isLoading) {
    return (
      <S.Loading className="loading-container">
        <div></div>
      </S.Loading>
    );
  }

  if (isError) {
    return <S.Error>Error! {error.toString()}</S.Error>;
  }

  return (
    <Layout>
      {isFetching && <S.FetchingLoading className="loading">fetching...</S.FetchingLoading>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <S.MovieContainer>
          {data?.pages?.map(page =>
            page.results?.map(movie => <MovieCard movie={movie} key={movie.id} />),
          )}
        </S.MovieContainer>
      </InfiniteScroll>
    </Layout>
  );
};

export default Search;
