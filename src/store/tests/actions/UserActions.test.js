import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axios from 'axios';
import * as actions from '../../actions/UserActions';
import * as actionTypes from '../../actionTypes/UserActionTypes';

jest.mock('axios');

describe('User actions creator', () => {
  let store;
  const data = {
    data: {
      desc: 'Hi, im Andres and i like action movies and dogs',
      email: 'test@test.com',
      img: 'imgPath.jpg',
      name: 'Andres Urrutia Solarte f',
      tel: '3001231234',
    },
    status: 200,
  };
  const storeInitState = {
    movies: {
      userInfo: null,
      loading: false,
      error: null,
      userUpdate: null,
      loadingUpdate: false,
      errorUpdate: null,
    },
  };

  beforeEach(() => {
    store = configureStore([thunk])(storeInitState);
    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
    axios.patch.mockImplementationOnce(() => Promise.resolve({ data }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // popular movies
  it('should create an action to start fecthing user info', () => {
    const expectedAction = {
      type: actionTypes.FETCH_USER_INFO_START,
    };
    expect(actions.fetchUserInfoStart()).toEqual(expectedAction);
  });

  it('should create an action when fetching user info has been done', () => {
    const userInfo = { name: 'Andres' };
    const expectedAction = {
      type: actionTypes.FETCH_USER_INFO_SUCCESS,
      userInfo,
    };
    expect(actions.fetchUserInfoSuccess(userInfo)).toEqual(expectedAction);
  });

  it('should create an action when fetching user info throws error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.FETCH_USER_INFO_FAIL,
      error,
    };
    expect(actions.fetchUserInfoFail(error)).toEqual(expectedAction);
  });

  it('should create FETCH_USER_INFO_START and FETCH_USER_INFO_SUCCESS when fetching user info has been done', () => {
    const expectedAction = [
      { type: actionTypes.FETCH_USER_INFO_START },
      { type: actionTypes.FETCH_USER_INFO_SUCCESS, userInfo: data },
    ];
    store.dispatch(actions.fetchUserInfo()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  // Update user info
  it('should create an action to update user info', () => {
    const expectedAction = {
      type: actionTypes.UPDATE_USER_INFO_START,
    };
    expect(actions.updateUserStart()).toEqual(expectedAction);
  });

  it('should create an action when updating user info has been done', () => {
    const expectedAction = {
      type: actionTypes.UPDATE_USER_INFO_SUCCESS,
      res: data,
    };
    expect(actions.updateUserSuccess(data)).toEqual(expectedAction);
  });

  it('should create an action when updating user info throws error', () => {
    const error = { name: 'error' };
    const expectedAction = {
      type: actionTypes.UPDATE_USER_INFO_FAIL,
      error,
    };
    expect(actions.updateUserFail(error)).toEqual(expectedAction);
  });

  it('should create FETCH_TOP_RATED_MOVIES_START and FETCH_TOP_RATED_MOVIES_SUCCESS when fetching top rated movies has been done', () => {
    const expectedAction = [
      { type: actionTypes.FETCH_USER_INFO_START },
      {
        type: actionTypes.UPDATE_USER_INFO_START,
      },
      {
        type: actionTypes.UPDATE_USER_INFO_SUCCESS,
        res: data,
      },
    ];
    store.dispatch(actions.updateUser(data)).then(() => {
      expect.arrayContaining(expectedAction);
    });
  });
});
