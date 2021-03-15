import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axiosInstance from '../../../axios';
import * as actions from '../../actions/MoviesActions';
import * as actionTypes from '../../actionTypes/MoviesActionsTypes';

jest.mock('../../../axios');

describe('Movies actions creator', () => {
  let store;
  const data = { results: [{ name: 'Batman', id: 12 }] };
  const storeInitState = {
    movies: {
      popularMovies: null,
      loadingPopularMovies: false,
      errorPopularMovies: null,
      topRatedMovies: null,
      loadingTopRatedMovies: false,
      errorTopRatedMovies: null,
      latestMovie: null,
      loadingLatestMovie: false,
      errorLatestMovie: null,
    },
  };

  beforeEach(() => {
    store = configureStore([thunk])(storeInitState);
    axiosInstance.get.mockImplementationOnce(() => Promise.resolve({ data }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // popular movies
  it('should create an action to start fecthing popular movies', () => {
    const expectedAction = {
      type: actionTypes.FETCH_POPULAR_MOVIES_START,
    };
    expect(actions.fetchPopularMoviesStart()).toEqual(expectedAction);
  });

  it('should create an action when fetching popular movies has been done', () => {
    const movies = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
      movies,
    };
    expect(actions.fetchPopularMoviesSuccess(movies)).toEqual(expectedAction);
  });

  it('should create an action when fetching throws error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.FETCH_POPULAR_MOVIES_FAIL,
      error,
    };
    expect(actions.fetchPopularMoviesFail(error)).toEqual(expectedAction);
  });

  it('should create FETCH_POPULAR_MOVIES_START and FETCH_POPULAR_MOVIES_SUCCESS when fetching popular movies has been done', () => {
    const expectedAction = [
      { type: actionTypes.FETCH_POPULAR_MOVIES_START },
      { type: actionTypes.FETCH_LATEST_START },
      { type: actionTypes.FETCH_POPULAR_MOVIES_SUCCESS, movies: data.results },
    ];
    store.dispatch(actions.fetchPopularMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  // Top rated movies
  it('should create an action to start fecthing top rated movies', () => {
    const expectedAction = {
      type: actionTypes.FETCH_TOP_RATED_MOVIES_START,
    };
    expect(actions.fetchTopRatedMoviesStart()).toEqual(expectedAction);
  });

  it('should create an action when fetching top rated movies has been done', () => {
    const movies = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS,
      movies,
    };
    expect(actions.fetchTopRatedMoviesSuccess(movies)).toEqual(expectedAction);
  });

  it('should create an action when fetching top rated movies throws error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.FETCH_TOP_RATED_MOVIES_FAIL,
      error,
    };
    expect(actions.fetchTopRatedMoviesFail(error)).toEqual(expectedAction);
  });

  it('should create FETCH_TOP_RATED_MOVIES_START and FETCH_TOP_RATED_MOVIES_SUCCESS when fetching top rated movies has been done', () => {
    const expectedAction = [
      {
        type: actionTypes.FETCH_TOP_RATED_MOVIES_START,
      },
      {
        type: actionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS,
        movies: data.results,
      },
    ];
    store.dispatch(actions.fetchTopRatedMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  // latest movie
  it('should create an action to start fecthing latest popular movie', () => {
    const expectedAction = {
      type: actionTypes.FETCH_LATEST_START,
    };
    expect(actions.fetchLatestMovieStart()).toEqual(expectedAction);
  });

  it('should create an action when fetching tlatest popular movie has been done', () => {
    const movie = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.FETCH_LATEST_SUCCESS,
      movie,
    };
    expect(actions.fetchLatestMovieSuccess(movie)).toEqual(expectedAction);
  });

  it('should create an action when fetching latest popular movie throws error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.FETCH_LATEST_FAIL,
      error,
    };
    expect(actions.fetchLatestMovieFail(error)).toEqual(expectedAction);
  });

  it('should create FETCH_LATEST_START and FETCH_LATEST_SUCCESS  when fetching lates movie has been done', () => {
    const expectedAction = [
      {
        type: actionTypes.FETCH_LATEST_START,
      },
      { type: actionTypes.FETCH_LATEST_SUCCESS, movie: data },
    ];
    store.dispatch(actions.fetchLatestMovie()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
