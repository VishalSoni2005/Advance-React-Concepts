import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  isLoggedIn: false,
  access_token: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isLoggedIn = true;
      state.access_token = action.payload;

      // Store token in cookies
      // Cookies.set('access_token', action.payload, { expires: 1 }); // Expires in 1 day
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.access_token = null;

      // Remove token from cookies
      Cookies.remove('access_token');
    },
  },
});

export const { setAuth, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
