//! step one : create Slice
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: cookies.get('token') || null,
  isAuthenticated: !!cookies.get('token'),
};

const authSlice = createSlice({
  name: 'auth', // name of the slice
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      cookies.set('token', action.payload, { expires: 7 });
    },
    signup: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      cookies.set('token', action.payload, { expires: 7 });
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      cookies.remove('token');
    },
  },
});

//! step two : export actions
export const { signin, signup, logout } = authSlice.actions;

//! step three : export reducer
export default authSlice.reducer;
