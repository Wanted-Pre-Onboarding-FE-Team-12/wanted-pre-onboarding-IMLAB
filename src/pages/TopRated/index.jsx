import Layout from 'layout';
import TopRated from './components/TopRated';
import Loading from '@components/Loading2';
import * as movieApi from '@api/movieApi';
import useInfiniteQueryWithObservation from '@hooks/useInfiniteQueryWithObservation';

const TopRatedPage = () => {
  const { data, status, LoadingOrObservation } = useInfiniteQueryWithObservation({
    api: movieApi.getTopRated,
    queryString: ['TopRated'],
  });

  if (status === 'loading')
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  if (status === 'error') return <Layout>에러</Layout>;

  return (
    <Layout>
      {data.map(movies => {
        return <TopRated movies={movies} key={movies.nextPage} />;
      })}
      {LoadingOrObservation()}
    </Layout>
  );
};

export default TopRatedPage;
