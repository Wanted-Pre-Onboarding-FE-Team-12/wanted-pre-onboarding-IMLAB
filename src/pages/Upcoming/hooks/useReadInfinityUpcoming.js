import { getUpcomingMovie } from '@api/movieApi';
import { useInfiniteQuery } from '@tanstack/react-query';

const MINUTE = 60 * 1000;

function useReadInfinityUpcoming() {
  const result = useInfiniteQuery(
    ['upcoming'],
    ({ pageParam = 1 }) => getUpcomingMovie(pageParam),
    {
      staleTime: MINUTE,
      cacheTime: MINUTE,
      getNextPageParam: lastPage => {
        return !lastPage.isEnd ? lastPage.nextPage : undefined;
      },
    },
  );
  return result;
}
export default useReadInfinityUpcoming;
