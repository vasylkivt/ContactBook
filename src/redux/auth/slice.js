import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      //// register
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, handleRejected)

      //// login
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, handleRejected)

      //// logout
      .addCase(logout.pending, handlePending)

      .addCase(logout.fulfilled, () => initialState)
      .addCase(logout.rejected, handleRejected)

      //// refresh
      .addCase(refresh.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refresh.rejected, () => initialState);
  },
});
