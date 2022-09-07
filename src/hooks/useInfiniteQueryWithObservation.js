import Loading from '@components/Loading2';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useInfiniteQueryWithObservation = ({ api, queryString }) => {
  const { ref, inView } = useInView();

  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    [...queryString],
    api,
    {
      getNextPageParam: lastPage => lastPage.nextPage,
    },
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  const LoadingOrObservation = () => (isFetchingNextPage ? <Loading /> : <div ref={ref}></div>);

  return {
    data: data?.pages,
    status,
    fetchNextPage,
    LoadingOrObservation,
  };
};

export default useInfiniteQueryWithObservation;
