import React from 'react';
import PropTypes from 'prop-types';

import darkRoom from '../img/bgMovie.jpg';
import ImgBackground from '../components/Auth/imgBackground';
import AuthContent from '../components/Auth/AuthContent';
import Login from '../components/Auth/Login';

const Auth = ({ login }) => {
  return (
    <ImgBackground img={darkRoom}>
      <AuthContent>
        <Login login={login} />
      </AuthContent>
    </ImgBackground>
  );
};

Auth.propTypes = {
  login: PropTypes.func,
};

Auth.defaultProps = {
  login: () => {},
};

export default Auth;
