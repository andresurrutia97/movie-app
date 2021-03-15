import reducer from '../../reducers/MovieReducer';
import * as actionTypes from '../../actionTypes/MovieActionsTypes';

describe('Movie reducer', () => {
  const initState = {
    movieInfo: null,
    loading: false,
    error: null,
  };

  const data = { name: 'Batman', id: 12 };
  const error = 'error';

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  // popular movies
  it('should handle FETCH_MOVIE_START', () => {
    const expectedState = {
      loading: true,
      error: null,
    };

    expect(reducer({}, { type: actionTypes.FETCH_MOVIE_START })).toEqual(
      expect.objectContaining(expectedState)
    );
  });

  it('should handle FETCH_MOVIE_SUCCESS', () => {
    const action = {
      type: actionTypes.FETCH_MOVIE_SUCCESS,
      movie: data,
    };

    const expectedState = {
      movieInfo: data,
      loading: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });

  it('should handle FETCH_MOVIE_FAIL', () => {
    const action = {
      type: actionTypes.FETCH_MOVIE_FAIL,
      error,
    };

    const expectedState = {
      error,
      loading: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });
});
