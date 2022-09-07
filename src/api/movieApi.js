import { instance } from './index';

export const getPopularMovie = async page => {
<<<<<<< HEAD
  const response = await instance.get('movie/popular', { params: { page } });
=======
  const response = await instance.get('popular', { params: { page } });
>>>>>>> 7e55434 (card 컴포넌트 레이아웃 구현 및 star rating 구현)
  return response.data;
};

export const getNowPlayingMovie = async page => {
  const response = await instance.get('movie/now_playing', { params: { page } });
  return response.data;
};

export const getUpcomingMovie = async page => {
  const response = await instance.get('movie/upcoming', { params: { page } });
  return response.data;
};

<<<<<<< HEAD
=======
export const getTopRatedMovie = async page => {
  const response = await instance.get('movie/top_rated', { params: { page } });
  return response.data;
};

>>>>>>> 7e55434 (card 컴포넌트 레이아웃 구현 및 star rating 구현)
export const getMovieDetail = async id => {
  const response = await instance.get(`movie/${id}`);
  return response.data;
};

export const searchMovie = async (query, page) => {
  const response = await instance.get(`search/movie`, { params: { query, page } });
  return response.data;
};
<<<<<<< HEAD

export const getTopRated = async ({ pageParam = 1 }) => {
  const { data } = await instance.get(`movie/top_rated?page=${pageParam}`);
  const isLast = data.page === data.total_pages;

  return {
    result: data,
    nextPage: pageParam + 1,
    isLast,
  };
};
=======
>>>>>>> 7e55434 (card 컴포넌트 레이아웃 구현 및 star rating 구현)
