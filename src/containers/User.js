import React from 'react';

import UserView from '../views/User';
import { useDispatch, useSelector } from '../utils/reduxHooks';
import { fetchUserInfo, updateUser } from '../store/actions/UserActions';

const User = () => {
  const {
    userInfo,
    loading,
    error,
    userUpdate,
    loadingUpdate,
    errorUpdate,
  } = useSelector((state) => ({
    userInfo: state.user.userInfo,
    loading: state.user.loading,
    error: state.user.error,
    userUpdate: state.user.userUpdate,
    loadingUpdate: state.user.loadingUpdate,
    errorUpdate: state.user.errorUpdate,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const handleUserInfoUpdate = (data) => {
    dispatch(updateUser(data));
  };

  return (
    <UserView
      userInfo={userInfo}
      loading={loading}
      error={error}
      userUpdate={userUpdate}
      loadingUpdate={loadingUpdate}
      errorUpdate={errorUpdate}
      updateInfo={handleUserInfoUpdate}
    />
  );
};

export default User;
