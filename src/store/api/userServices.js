import axios from 'axios';

export const getUserInfo = async () =>
  axios
    .get(
      'https://netflix-1711a.firebaseio.com/users/nlexQcndqrbqn9ZuweNXAEg6TzH3.json'
    )
    .then((res) => res);

export const updateUserInfo = async (data) =>
  axios
    .patch(
      `https://netflix-1711a.firebaseio.com/users/nlexQcndqrbqn9ZuweNXAEg6TzH3.json`,
      data
    )
    .then((res) => res);
