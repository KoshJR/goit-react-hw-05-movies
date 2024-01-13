import axios from 'axios';
const API_KEY = 'a771aa97b6f20a2b246806be1610be4c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getPopularMovies = async () => {
  const response = await axios.get('trending/all/week');
  return response.data;
};

export const getMovieInfo = async id => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};

export const getActorInfo = async id => {
  const response = await axios.get(`movie/${id}/credits`);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`);
  return response.data;
};

export const searchMovie = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&page=1`
  );
  return response.data;
};
