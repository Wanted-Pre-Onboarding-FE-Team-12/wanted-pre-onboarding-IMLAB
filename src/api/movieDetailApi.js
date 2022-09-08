import { instance } from './index';

export const getMovieDetail = async id => {
  const response = await instance.get(`movie/${id}`);
  return response.data;
};

export const getMovieVideo = async id => {
  const response = await instance.get(`movie/${id}/videos`);
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await instance.get(`movie/${id}/credits`);
  return response.data;
};
