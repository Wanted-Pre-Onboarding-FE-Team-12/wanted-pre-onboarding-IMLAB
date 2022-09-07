import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

const MINUTE = 60 * 1000;

const readUpcoming = async pageParam => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=7d5c78583c93376e2e364af9b3efa7b1&page=${pageParam}`,
  );

  return {
    result: data.results,
    nextPage: pageParam + 1,
    isEnd: pageParam >= data.total_pages,
  };
};

function useReadInfinityUpcoming() {
  const result = useInfiniteQuery('upcoming', ({ pageParam = 1 }) => readUpcoming(pageParam), {
    staleTime: MINUTE,
    cacheTime: MINUTE,
    getNextPageParam: lastPage => {
      return !lastPage.isEnd ? lastPage.nextPage : undefined;
    },
  });
  return result;
}
export default useReadInfinityUpcoming;
