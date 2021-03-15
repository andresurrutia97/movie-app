import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import Button from '../Ui/Button';
import logo from '../../img/logoWeb.png';

const Login = ({ login }) => (
  <div className="w-full flex flex-col text-white items-center px-6 ">
    <img className="w-56 mb-2" src={logo} alt="logo" />
    <span className="mb-2 text-white text-center text-4xl font-semibold md:text-5xl xl:text-6xl">
      The best streaming platform
    </span>
    <span className="text-white text-center md:text-xl">
      Enjoy wherever you are.
    </span>
    <div className="w-full md:w-64 mt-12">
      <Button onClick={() => login()}>LOGIN</Button>
    </div>
    <Link className="text-sm mt-4" to="/toc">
      TOC & Privacy policy
    </Link>
  </div>
);

Login.propTypes = {
  login: PropTypes.func,
};

Login.defaultProps = {
  login: () => {},
};

export default withRouter(Login);
