import { useAuth } from 'hooks';

import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Component />;
};
