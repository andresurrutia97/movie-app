import reducer from '../../reducers/UserReducer';
import * as actionTypes from '../../actionTypes/UserActionTypes';

describe('User reducer', () => {
  const initState = {
    userInfo: null,
    loading: false,
    error: null,
    userUpdate: null,
    loadingUpdate: false,
    errorUpdate: null,
  };

  const data = [{ name: 'Andres', tel: 12 }];
  const error = 'error';

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should handle FETCH_USER_INFO_START', () => {
    const expectedState = {
      loading: true,
      error: null,
    };

    expect(reducer({}, { type: actionTypes.FETCH_USER_INFO_START })).toEqual(
      expect.objectContaining(expectedState)
    );
  });

  it('should handle FETCH_USER_INFO_SUCCESS', () => {
    const action = {
      type: actionTypes.FETCH_USER_INFO_SUCCESS,
      userInfo: data,
    };

    const expectedState = {
      userInfo: data,
      loading: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });

  it('should handle FETCH_USER_INFO_FAIL', () => {
    const action = {
      type: actionTypes.FETCH_USER_INFO_FAIL,
      error,
    };

    const expectedState = {
      error,
      loading: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });

  // Update user info
  it('should handle UPDATE_USER_INFO_START', () => {
    const expectedState = {
      loadingUpdate: true,
      errorUpdate: null,
    };

    expect(reducer({}, { type: actionTypes.UPDATE_USER_INFO_START })).toEqual(
      expect.objectContaining(expectedState)
    );
  });

  it('should handle UPDATE_USER_INFO_SUCCESS', () => {
    const action = {
      type: actionTypes.UPDATE_USER_INFO_SUCCESS,
      res: data,
    };

    const expectedState = {
      userUpdate: data,
      loadingUpdate: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });

  it('should handle UPDATE_USER_INFO_FAIL', () => {
    const action = {
      type: actionTypes.UPDATE_USER_INFO_FAIL,
      error,
    };

    const expectedState = {
      errorUpdate: error,
      loadingUpdate: false,
    };

    expect(reducer({}, action)).toEqual(expect.objectContaining(expectedState));
  });
});
