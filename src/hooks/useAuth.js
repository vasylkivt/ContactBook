import { useSelector } from 'react-redux';
import { authSelectors } from '/src/redux/auth';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const error = useSelector(authSelectors.selectError);
  const token = useSelector(authSelectors.selectToken);
  const user = useSelector(authSelectors.selectUser);
  const isLoading = useSelector(authSelectors.selectIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
    token,
    isLoading,
  };
};
