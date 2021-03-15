import React, { lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Layout from '../layouts/Layout';
import SuspenseSwitch from './SuspenseSwitch';
import Home from '../containers/Home';

const Movie = lazy(() => import('../containers/Movie'));
const User = lazy(() => import('../containers/User'));
const ToC = lazy(() => import('../views/ToC'));
const NotFound = lazy(() => import('../views/not-found'));

const ProtectedRoutes = () => {
  return (
    <Layout>
      <SuspenseSwitch>
        <Route exact path="/" component={Home} />
        <Route path="/movie" component={Movie} />
        <Route path="/user" component={User} />
        <Route path="/toc" component={ToC} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </SuspenseSwitch>
    </Layout>
  );
};

export default ProtectedRoutes;
