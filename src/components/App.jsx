import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { PrivateRoute, PublicRoute, SharedLayout } from 'components';

import { useAuth } from 'hooks';
import { toastOptions } from 'utils/toast';
import { authOperations } from 'redux/auth';
import ModalRefresh from './ModalRefresh/ModalRefresh';

const HomeLazy = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const UserProfile = lazy(() => import('pages/UserProfile'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <ModalRefresh />}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeLazy />} />

          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute component={UserProfile} redirectTo="/login" />
            }
          />
          <Route
            path="/login"
            element={<PublicRoute component={Login} redirectTo="/contacts" />}
          />
          <Route
            path="/register"
            element={
              <PublicRoute component={Register} redirectTo="/contacts" />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      <Toaster toastOptions={toastOptions} />
    </>
  );
};
