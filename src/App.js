import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// import Spinner from './components/Ui/Spinner';
import ProtectedRoutes from './Routing/ProtectedRoutes';
// import UnprotectedRoutes from './Routing/UnprotectedRoutes';

const App = () => {
  // const { isAuthenticated, isLoading } = useAuth0();

  // const routes = isAuthenticated ? <ProtectedRoutes /> : <UnprotectedRoutes />;
  const routes = <ProtectedRoutes />;

  // return <>{isLoading ? <Spinner /> : routes}</>;
  return <>{routes}</>;
};

export default App;
