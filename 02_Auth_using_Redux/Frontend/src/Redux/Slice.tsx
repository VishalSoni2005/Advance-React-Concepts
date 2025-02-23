import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: Cookies.get('authToken') || null, // Load from cookies
  isAuthenticated: !!Cookies.get('authToken'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      Cookies.set('authToken', action.payload, { expires: 7 }); // Store in cookies
    },
    signin: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      Cookies.set('authToken', action.payload, { expires: 7 }); // Store in cookies
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      Cookies.remove('authToken'); // Remove token
    },
  },
});

export const { signup, logout, signin } = authSlice.actions;
export default authSlice.reducer;
