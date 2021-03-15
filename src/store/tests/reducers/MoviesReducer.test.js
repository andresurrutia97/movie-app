import reducer from '../../reducers/MoviesReducer';
import * as actionTypes from '../../actionTypes/MoviesActionsTypes';

describe('Movies reducer', () => {
  const initState = {
    popularMovies: null,
    loadingPopularMovies: false,
    errorPopularMovies: null,
    topRatedMovies: null,
    loadingTopRatedMovies: false,
    errorTopRatedMovies: null,
    latestMovie: null,
    loadingLatestMovie: false,
    errorLatestMovie: null,
  };

  const data = [{ name: 'Batman', id: 12 }];
  const error = 'error';

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  // popular movies
  it('should handle FETCH_POPULAR_MOVIES_START', () => {
    const expectedState = {
      loadingPopularMovies: true,
      errorPopularMovies: null,
    };

    expect(
      reducer({}, { type: actionTypes.FETCH_POPULAR_MOVIES_START })
    ).toEqual(expect.objectContaining(expectedState));
  });

  it('should handle FETCH_POPULAR_MOVIES_SUCCESS', () => {
    const action = {
      type: actionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
      movies: data,
    };

    const expectedState = {
      popularMovies: data,
      loadingPopularMovies: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });

  it('should handle FETCH_POPULAR_MOVIES_FAIL', () => {
    const action = {
      type: actionTypes.FETCH_POPULAR_MOVIES_FAIL,
      error,
    };

    const expectedState = {
      errorPopularMovies: error,
      loadingPopularMovies: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });

  // top rated movies
  it('should handle FETCH_TOP_RATED_MOVIES_START', () => {
    const expectedState = {
      loadingTopRatedMovies: true,
      errorTopRatedMovies: null,
    };

    expect(
      reducer({}, { type: actionTypes.FETCH_TOP_RATED_MOVIES_START })
    ).toEqual(expect.objectContaining(expectedState));
  });

  it('should handle FETCH_TOP_RATED_MOVIES_SUCCESS', () => {
    const action = {
      type: actionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS,
      movies: data,
    };

    const expectedState = {
      topRatedMovies: data,
      loadingTopRatedMovies: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });

  it('should handle FETCH_TOP_RATED_MOVIES_FAIL', () => {
    const action = {
      type: actionTypes.FETCH_TOP_RATED_MOVIES_FAIL,
      error,
    };

    const expectedState = {
      errorTopRatedMovies: error,
      loadingTopRatedMovies: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });

  // Latest popular movie
  it('should handle FETCH_LATEST_START', () => {
    const expectedState = {
      loadingLatestMovie: true,
      errorLatestMovie: null,
    };

    expect(reducer({}, { type: actionTypes.FETCH_LATEST_START })).toEqual(
      expect.objectContaining(expectedState)
    );
  });

  it('should handle FETCH_LATEST_SUCCESS', () => {
    const action = {
      type: actionTypes.FETCH_LATEST_SUCCESS,
      movie: data,
    };

    const expectedState = {
      latestMovie: action.movie,
      loadingLatestMovie: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });

  it('should handle FETCH_LATEST_FAIL', () => {
    const action = {
      type: actionTypes.FETCH_LATEST_FAIL,
      error,
    };

    const expectedState = {
      errorLatestMovie: error,
      loadingLatestMovie: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });
});
