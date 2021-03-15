import {
  FETCH_USER_INFO_FAIL,
  FETCH_USER_INFO_START,
  FETCH_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_START,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAIL,
} from '../actionTypes/UserActionTypes';

const initState = {
  userInfo: null,
  loading: false,
  error: null,
  userUpdate: null,
  loadingUpdate: false,
  errorUpdate: null,
};

const fetchUserInfoStart = (state) => ({
  ...state,
  loading: true,
  error: null,
});

const fetchUserInfoSuccess = (state, action) => ({
  ...state,
  userInfo: action.userInfo,
  loading: false,
});

const fetchUserInfoFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false,
});

// Update user info
const updateUserStart = (state) => ({
  ...state,
  loadingUpdate: true,
  errorUpdate: null,
});

const updateUserSuccess = (state, action) => ({
  ...state,
  userUpdate: action.res,
  loadingUpdate: false,
});

const updateUserFail = (state, action) => ({
  ...state,
  errorUpdate: action.error,
  loadingUpdate: false,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_START:
      return fetchUserInfoStart(state);

    case FETCH_USER_INFO_SUCCESS:
      return fetchUserInfoSuccess(state, action);

    case FETCH_USER_INFO_FAIL:
      return fetchUserInfoFail(state, action);

    case UPDATE_USER_INFO_START:
      return updateUserStart(state);

    case UPDATE_USER_INFO_SUCCESS:
      return updateUserSuccess(state, action);

    case UPDATE_USER_INFO_FAIL:
      return updateUserFail(state, action);

    default:
      return state;
  }
};

export default reducer;
