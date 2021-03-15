import {
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAIL,
} from '../actionTypes/MovieActionsTypes';
import { getMovie } from '../api/moviesServices';

export const fetchMovieStart = () => ({ type: FETCH_MOVIE_START });

export const fetchMovieSuccess = (movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  movie,
});

export const fetchMovieFail = (error) => ({
  type: FETCH_MOVIE_FAIL,
  error,
});

export const fetchMovieInfo = (id) => (dispatch) => {
  dispatch(fetchMovieStart());
  return getMovie(id)
    .then((res) => dispatch(fetchMovieSuccess(res.data)))
    .catch((e) => dispatch(fetchMovieFail(e)));
};
