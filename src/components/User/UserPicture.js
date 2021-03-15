import React from 'react';
import PropTypes from 'prop-types';

import defaultUser from '../../img/default-user-image.png';

const UserPicture = ({ img }) => {
  return (
    <img
      className="h-32 w-32 mb-5 m-auto rounded-full shadow-lg shadow-md md:m-0 md:mr-12"
      src={img}
      alt="profile"
    />
  );
};

UserPicture.propTypes = {
  img: PropTypes.string,
};

UserPicture.defaultProps = {
  img: defaultUser,
};

export default UserPicture;
