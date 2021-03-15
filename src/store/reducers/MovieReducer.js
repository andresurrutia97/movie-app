import {
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAIL,
} from '../actionTypes/MovieActionsTypes';

const initState = {
  movieInfo: null,
  loading: false,
  error: null,
};

const fetchMovieStart = (state) => ({ ...state, loading: true, error: null });

const fetchMovieSuccess = (state, action) => ({
  ...state,
  movieInfo: action.movie,
  loading: false,
});

const fetchMovieFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_START:
      return fetchMovieStart(state);

    case FETCH_MOVIE_SUCCESS:
      return fetchMovieSuccess(state, action);

    case FETCH_MOVIE_FAIL:
      return fetchMovieFail(state, action);

    default:
      return state;
  }
};

export default reducer;
