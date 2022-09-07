import Layout from 'layout';
import TopRated from './components/TopRated';
import Loading from '@components/Loading2';

import * as movieApi from '@api/movieApi';
import React, { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

const TopRatedPage = () => {
  const { ref, inView } = useInView();

  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['TopRated'],
    movieApi.getTopRated,
    {
      getNextPageParam: lastPage => lastPage.nextPage,
    },
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  useEffect(() => {
    console.log(data?.pages);
  }, [data]);

  if (status === 'loading')
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  if (status === 'error') return <Layout>에러</Layout>;

  return (
    <Layout>
      {data?.pages.map(movies => {
        return <TopRated movies={movies} key={movies.nextPage} />;
      })}
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </Layout>
  );
};

export default TopRatedPage;
