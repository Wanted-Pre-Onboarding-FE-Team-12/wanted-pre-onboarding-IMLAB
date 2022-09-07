import axios from 'axios';

export async function getPopularMovie() {
  try {
    const response = await callApi();
    const popularMovies = await response.results;
    return popularMovies;
  } catch (e) {
    console.error(e);
  }
}

export const callApi = async () => {
  const url =
    'https://api.themoviedb.org/3/movie/popular?api_key=7d5c78583c93376e2e364af9b3efa7b1&language=en-US&page=1';
  const response = await axios.get(url);
  return response.data;
};