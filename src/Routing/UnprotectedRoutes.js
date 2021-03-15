import React, { lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Auth from '../containers/Auth';
import SuspenseSwitch from './SuspenseSwitch';

const NotFound = lazy(() => import('../views/not-found'));
const ToC = lazy(() => import('../views/ToC'));

const MainRoutes = () => {
  return (
    <SuspenseSwitch>
      <Route exact path="/" component={Auth} />
      <Route path="/toc" component={ToC} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </SuspenseSwitch>
  );
};

export default MainRoutes;
