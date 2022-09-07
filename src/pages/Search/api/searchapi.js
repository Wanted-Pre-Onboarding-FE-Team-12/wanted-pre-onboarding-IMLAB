import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7d5c78583c93376e2e364af9b3efa7b1';

const SEARCH_MULTI = 'search/multi';

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('id_token')}`,
    'Content-Type': 'application/json',
  },
};

export const getSearchKeyword = searchWord => {
  return axios
    .get(`${BASE_URL}${SEARCH_MULTI}?api_key=${API_KEY}&query=${searchWord}&page=1`, config)
    .then(response => response.data);
};
