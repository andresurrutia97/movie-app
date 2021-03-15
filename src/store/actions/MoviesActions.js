import {
  FETCH_POPULAR_MOVIES_START,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAIL,
  FETCH_TOP_RATED_MOVIES_START,
  FETCH_TOP_RATED_MOVIES_SUCCESS,
  FETCH_TOP_RATED_MOVIES_FAIL,
  FETCH_LATEST_START,
  FETCH_LATEST_SUCCESS,
  FETCH_LATEST_FAIL,
} from '../actionTypes/MoviesActionsTypes';
import {
  getMovie,
  getPopularMovies,
  getTopRatedMovies,
} from '../api/moviesServices';

// Top rated movies
export const fetchLatestMovieStart = () => ({ type: FETCH_LATEST_START });

export const fetchLatestMovieSuccess = (movie) => ({
  type: FETCH_LATEST_SUCCESS,
  movie,
});

export const fetchLatestMovieFail = (error) => ({
  type: FETCH_LATEST_FAIL,
  error,
});

export const fetchLatestMovie = (id) => (dispatch) => {
  dispatch(fetchLatestMovieStart());
  return getMovie(id)
    .then((res) => dispatch(fetchLatestMovieSuccess(res.data)))
    .catch((e) => dispatch(fetchLatestMovieFail(e)));
};

// Popular movies
export const fetchPopularMoviesStart = () => ({
  type: FETCH_POPULAR_MOVIES_START,
});

export const fetchPopularMoviesSuccess = (movies) => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  movies,
});

export const fetchPopularMoviesFail = (error) => ({
  type: FETCH_POPULAR_MOVIES_FAIL,
  error,
});

export const fetchPopularMovies = () => (dispatch, getState) => {
  const { popularMovies, loadingPopularMovies } = getState().movies;
  if (!popularMovies) {
    dispatch(fetchPopularMoviesStart());
    return getPopularMovies()
      .then((res) => {
        const latest = res.data.results[0].id;
        dispatch(fetchLatestMovie(latest));
        dispatch(fetchPopularMoviesSuccess(res.data.results));
      })
      .catch((error) => {
        dispatch(fetchPopularMoviesFail(error));
      });
  }
  if (loadingPopularMovies) {
    return false;
  }
};

// Top rated movies
export const fetchTopRatedMoviesStart = () => ({
  type: FETCH_TOP_RATED_MOVIES_START,
});

export const fetchTopRatedMoviesSuccess = (movies) => ({
  type: FETCH_TOP_RATED_MOVIES_SUCCESS,
  movies,
});

export const fetchTopRatedMoviesFail = (error) => ({
  type: FETCH_TOP_RATED_MOVIES_FAIL,
  error,
});

export const fetchTopRatedMovies = () => (dispatch, getState) => {
  const { topRatedMovies, loadingTopRatedMovies } = getState().movies;
  if (!topRatedMovies) {
    dispatch(fetchTopRatedMoviesStart());
    return getTopRatedMovies()
      .then((res) => {
        dispatch(fetchTopRatedMoviesSuccess(res.data.results));
      })
      .catch((error) => {
        dispatch(fetchTopRatedMoviesFail(error));
      });
  }
  if (loadingTopRatedMovies) {
    return false;
  }
};
