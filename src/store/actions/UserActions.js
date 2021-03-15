import {
  FETCH_USER_INFO_FAIL,
  FETCH_USER_INFO_START,
  FETCH_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_START,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAIL,
} from '../actionTypes/UserActionTypes';
import { getUserInfo, updateUserInfo } from '../api/userServices';

export const fetchUserInfoStart = () => ({ type: FETCH_USER_INFO_START });

export const fetchUserInfoSuccess = (userInfo) => ({
  type: FETCH_USER_INFO_SUCCESS,
  userInfo,
});

export const fetchUserInfoFail = (error) => ({
  type: FETCH_USER_INFO_FAIL,
  error,
});

export const fetchUserInfo = () => (dispatch) => {
  dispatch(fetchUserInfoStart());
  return getUserInfo()
    .then((response) => {
      dispatch(fetchUserInfoSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchUserInfoFail(error));
    });
};

// Update user info
export const updateUserStart = () => ({ type: UPDATE_USER_INFO_START });

export const updateUserSuccess = (res) => ({
  type: UPDATE_USER_INFO_SUCCESS,
  res,
});

export const updateUserFail = (error) => ({
  type: UPDATE_USER_INFO_FAIL,
  error,
});

export const updateUser = (data) => (dispatch) => {
  dispatch(updateUserStart());
  return updateUserInfo(data)
    .then((res) => {
      dispatch(updateUserSuccess(res));
      dispatch(fetchUserInfo());
    })
    .catch((error) => {
      dispatch(updateUserFail(error));
    });
};
