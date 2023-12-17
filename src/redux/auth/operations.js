import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toastMessage } from 'utils/toast';
axios.defaults.baseURL = 'https://inquisitive-smock-seal.cyclic.app';
// axios.defaults.baseURL = 'https://contact-book-backend-gs28.onrender.com';
// axios.defaults.baseURL = 'http://localhost:1618';
const AUTH_ENDPOINTS = {
  register: '/api/auth/register',
  login: '/api/auth/login',
  logout: '/api/auth/logout',
  refresh: '/api/auth/current',
};

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//!  register
export const register = createAsyncThunk(
  'auth/register',
  async (registerData, thinkAPI) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINTS.register, registerData);

      toastMessage.registerSuccess(data);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toastMessage.registerError(error);
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

//!  login
export const login = createAsyncThunk(
  'auth/login',
  async (loginData, thinkAPI) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINTS.login, loginData);
      toastMessage.loginSuccess(data);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toastMessage.loginError(error);
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

//!   logout
export const logout = createAsyncThunk('auth/logout', async (_, thinkAPI) => {
  try {
    await axios.post(AUTH_ENDPOINTS.logout);
    toastMessage.logoutSuccess();
    clearAuthHeader();
  } catch (error) {
    console.log('error:', error);
    toastMessage.logoutError(error);
    return thinkAPI.rejectWithValue(error.message);
  }
});

//!   refresh
export const refresh = createAsyncThunk('auth/refresh', async (_, thinkAPI) => {
  const { auth } = thinkAPI.getState();

  if (auth.token === null) {
    toastMessage.refreshNoToken();
    return thinkAPI.rejectWithValue();
  }
  setAuthHeader(auth.token);
  try {
    const { data } = await axios.get(AUTH_ENDPOINTS.refresh);

    toastMessage.refreshSuccess(data.user);

    return data;
  } catch (error) {
    toastMessage.refreshError(error);
    return thinkAPI.rejectWithValue(error.message);
  }
});
