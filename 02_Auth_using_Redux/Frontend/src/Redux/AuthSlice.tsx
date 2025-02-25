import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  email: string | null;
  isAuthenticated: boolean;
}

// Define the payload type for signin/signup actions
interface AuthPayload {
  token: string;
  email: string;
}

const initialState: AuthState = {
  token:  null, // Load token from cookies
  email:  null, // Load email from cookies
  isAuthenticated: false, // Check if token exists
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Combined action for signin and signup
    setAuth: (state, action: PayloadAction<AuthPayload>) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isAuthenticated = true;

      // Set cookies with expiry (7 days)
      Cookies.set('authToken', action.payload.token, { expires: 7 });
      Cookies.set('email', action.payload.email, { expires: 7 });
    },
    logout: (state) => {
      state.token = null;
      state.email = null;
      state.isAuthenticated = false;

      // Remove cookies on logout
      Cookies.remove('authToken');
      Cookies.remove('email');
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import Cookies from 'js-cookie';

// interface AuthState {
//   token: string | null;
//   email: string | null;
//   isAuthenticated: boolean;
// }

// const initialState: AuthState = {
//   token: Cookies.get('authToken') || null, // Load token from cookies
//   isAuthenticated: !!Cookies.get('authToken'),
//   email: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     signup: (state, action: PayloadAction<AuthState>) => {
//       state.token = action.payload.token;
//       state.isAuthenticated = true;
//       Cookies.set('authToken', action.payload, { expires: 7 });
//     },
//     signin: (state, action: PayloadAction<string>) => {
//       state.token = action.payload;
//       state.isAuthenticated = true;
//       Cookies.set('authToken', action.payload, { expires: 7 });
//     },
//     logout: (state) => {
//       state.token = null;
//       state.email = '';
//       state.isAuthenticated = false;
//       Cookies.remove('authToken');
//       // Cookies.remove('userEmail'); // Clear email on logout
//     },
//   },
// });

// export const { signup, signin, logout } = authSlice.actions;
// export default authSlice.reducer;
