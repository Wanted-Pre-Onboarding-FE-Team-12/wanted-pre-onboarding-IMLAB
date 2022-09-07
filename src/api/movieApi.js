import { instance } from './index';

export const getPopularMovie = async page => {
  const response = await instance.get('movie/popular', { params: { page } });
  return response.data;
};

export const getNowPlayingMovie = async page => {
  const response = await instance.get('movie/now_playing', { params: { page } });
  return response.data;
};

export const getUpcomingMovie = async pageParam => {
  const { data } = await instance.get(`movie/upcoming`, {
    params: { page: pageParam },
  });

  return {
    result: data.results,
    nextPage: pageParam + 1,
    isEnd: pageParam >= data.total_pages,
  };
};

export const getTopRatedMovie = async page => {
  const response = await instance.get('movie/top_rated', { params: { page } });
  return response.data;
};

export const getMovieDetail = async id => {
  const response = await instance.get(`movie/${id}`);
  return response.data;
};

export const searchMovie = async (query, page) => {
  const response = await instance.get(`search/movie`, { params: { query, page } });
  return response.data;
};
