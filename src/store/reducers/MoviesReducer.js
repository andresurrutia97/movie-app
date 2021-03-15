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

const initState = {
  // Popular movies
  popularMovies: null,
  loadingPopularMovies: false,
  errorPopularMovies: null,
  // Top rated movies
  topRatedMovies: null,
  loadingTopRatedMovies: false,
  errorTopRatedMovies: null,
  // Latest popular movie
  latestMovie: null,
  loadingLatestMovie: false,
  errorLatestMovie: null,
};

// Popular movies
const fetchPopularMoviesStart = (state) => ({
  ...state,
  loadingPopularMovies: true,
  errorPopularMovies: null,
});

const fetchPopularMoviesSuccess = (state, action) => ({
  ...state,
  popularMovies: action.movies,
  loadingPopularMovies: false,
});

const fetchPopularMoviesFail = (state, action) => ({
  ...state,
  errorPopularMovies: action.error,
  loadingPopularMovies: false,
});

// Top rated  movies
const fetchTopRatedMoviesStart = (state) => ({
  ...state,
  loadingTopRatedMovies: true,
  errorTopRatedMovies: null,
});

const fetchTopRatedMoviesSuccess = (state, action) => ({
  ...state,
  topRatedMovies: action.movies,
  loadingTopRatedMovies: false,
});

const fetchTopRatedMoviesFail = (state, action) => ({
  ...state,
  errorTopRatedMovies: action.error,
  loadingTopRatedMovies: false,
});

// Latest movie
const fetchLatestMovieStart = (state) => ({
  ...state,
  loadingLatestMovie: true,
  errorLatestMovie: null,
});

const fetchLatestMovieSuccess = (state, action) => ({
  ...state,
  latestMovie: action.movie,
  loadingLatestMovie: false,
});

const fetchLatestMovieFail = (state, action) => ({
  ...state,
  errorLatestMovie: action.error,
  loadingLatestMovie: false,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    // Popular movies
    case FETCH_POPULAR_MOVIES_START:
      return fetchPopularMoviesStart(state);

    case FETCH_POPULAR_MOVIES_SUCCESS:
      return fetchPopularMoviesSuccess(state, action);

    case FETCH_POPULAR_MOVIES_FAIL:
      return fetchPopularMoviesFail(state, action);

    // top rated movies
    case FETCH_TOP_RATED_MOVIES_START:
      return fetchTopRatedMoviesStart(state);

    case FETCH_TOP_RATED_MOVIES_SUCCESS:
      return fetchTopRatedMoviesSuccess(state, action);

    case FETCH_TOP_RATED_MOVIES_FAIL:
      return fetchTopRatedMoviesFail(state, action);

    // latest popular movie
    case FETCH_LATEST_START:
      return fetchLatestMovieStart(state);

    case FETCH_LATEST_SUCCESS:
      return fetchLatestMovieSuccess(state, action);

    case FETCH_LATEST_FAIL:
      return fetchLatestMovieFail(state, action);

    default:
      return state;
  }
};

export default reducer;
