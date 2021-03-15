import axios from 'axios';

export const getFavoritesMoviesList = async () =>
  axios
    .get('https://netflix-1711a.firebaseio.com/favorites.json')
    .then((res) => res);

export const addFavoriteMovie = async (movieId) =>
  axios
    .patch(`https://netflix-1711a.firebaseio.com/favorites/${movieId}.json`, {
      id: movieId,
    })
    .then((res) => res);

export const removeFavoriteMovie = async (movieId) =>
  axios
    .delete(`https://netflix-1711a.firebaseio.com/favorites/${movieId}.json`, {
      id: movieId,
    })
    .then((res) => res);

export const getSeenMoviesList = async () =>
  axios
    .get('https://netflix-1711a.firebaseio.com/seen.json')
    .then((res) => res);

export const addSeenMovie = async (movieId) =>
  axios
    .patch(`https://netflix-1711a.firebaseio.com/seen/${movieId}.json`, {
      id: movieId,
    })
    .then((res) => res);
