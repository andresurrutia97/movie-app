import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import AuthView from '../views/Auth';

const Auth = () => {
  const { loginWithRedirect } = useAuth0();

  return <AuthView login={loginWithRedirect} />;
};

export default Auth;
