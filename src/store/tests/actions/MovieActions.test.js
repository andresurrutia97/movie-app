import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axiosInstance from '../../../axios';
import * as actions from '../../actions/MovieActions';
import * as actionTypes from '../../actionTypes/MovieActionsTypes';

jest.mock('../../../axios');

describe('Movie actions creator', () => {
  let store;
  const data = { data: { results: [{ name: 'Batman', id: 12 }] } };
  const storeInitState = {
    movie: {
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

  afterEach(() => jest.clearAllMocks());

  it('should create an action to start fecthing for a movie', () => {
    const expectedAction = {
      type: actionTypes.FETCH_MOVIE_START,
    };
    expect(actions.fetchMovieStart()).toEqual(expectedAction);
  });

  it('should create an action when fetching the movie has been done', () => {
    const movie = { name: 'movie' };
    const expectedAction = {
      type: actionTypes.FETCH_MOVIE_SUCCESS,
      movie,
    };
    expect(actions.fetchMovieSuccess(movie)).toEqual(expectedAction);
  });

  it('should create an action when the fetching returns an error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.FETCH_MOVIE_FAIL,
      error,
    };
    expect(actions.fetchMovieFail(error)).toEqual(expectedAction);
  });

  it('should create FETCH_MOVIE_START and FETCH_MOVIE_SUCCESS when fetching lates movie has been done', () => {
    const expectedAction = [
      {
        type: actionTypes.FETCH_MOVIE_START,
      },
      { type: actionTypes.FETCH_MOVIE_SUCCESS, movie: data },
    ];
    store.dispatch(actions.fetchMovieInfo()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
