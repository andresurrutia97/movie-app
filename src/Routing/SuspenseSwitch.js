import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from '../components/Ui/Spinner';

const SuspenseSwitch = ({ children }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>{children}</Switch>
  </Suspense>
);

SuspenseSwitch.propTypes = {
  children: PropTypes.node,
};

SuspenseSwitch.defaultProps = {
  children: null,
};

export default SuspenseSwitch;
