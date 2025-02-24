// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import Cookies from 'js-cookie';

// interface AuthState {
//   token: string | null;
//   isAuthenticated: boolean;
// }

// const initialState: AuthState = {
//   token: Cookies.get('authToken') || null, // Load from cookies
//   isAuthenticated: !!Cookies.get('authToken'),
// };

// // Authentication Slice
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     signup: (state, action: PayloadAction<string>) => {
//       state.token = action.payload;
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
//       state.isAuthenticated = false;
//       Cookies.remove('authToken');
//     },
//   },
// });

// interface UserState {
//   email: string;
// }

// // User State

// const initialStateUser: UserState = {
//   email: '',
// };

// // User State

// // User Slice
// const userSlice = createSlice({
//   name: 'user',
//   initialState: initialStateUser,
//   reducers: {
//     addUser: (state, action: PayloadAction<{ email: string }>) => {
//       state.email = action.payload.email;
//     },
//     updateUser: (state, action: PayloadAction<{ email: string }>) => {
//       state.email = action.payload.email;
//     },
//     deleteUser: (state) => {
//       state.email = '';
//     },
//   },
// });

// // Export Actions
// export const { signup, signin, logout } = authSlice.actions;
// export const { addUser, updateUser, deleteUser } = userSlice.actions;

// // Combine Reducers
// const rootReducer = {
//   auth: authSlice.reducer,
//   user: userSlice.reducer,
// };

// export default rootReducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  email: string | null;
  isAuthenticated: boolean;
}

const initialAuthState: AuthState = {
  token: Cookies.get('authToken') || null, // Load token from cookies
  isAuthenticated: !!Cookies.get('authToken'),
  email: Cookies.get('userEmail') || null,
};

// Authentication Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    signup: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      Cookies.set('authToken', action.payload, { expires: 7 });
    },
    signin: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      Cookies.set('authToken', action.payload, { expires: 7 });
    },
    logout: (state) => {
      state.token = null;
      state.email = '';
      state.isAuthenticated = false;
      Cookies.remove('authToken');
      Cookies.remove('userEmail'); // Clear email on logout
    },
  },
});

interface UserState {
  email: string;
  profile_img: string;
  name: string;
}

const initialStateUser: UserState = {
  email: Cookies.get('email') || '',
  name: '',
  profile_img: '',
};

// User Slice
const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{ name: string; email: string; profile_img: string }>
    ) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.profile_img = action.payload.profile_img;
      Cookies.set('email', action.payload.email, { expires: 7 }); // Persist email
    },
    deleteUser: (state) => {
      state.email = '';
      state.name = '';
      Cookies.remove('email'); // Clear email on logout
    },
  },
});

// Export Actions
export const { signup, signin, logout } = authSlice.actions;
export const { addUser, deleteUser } = userSlice.actions;

// Combine Reducers
const rootReducer = {
  auth: authSlice.reducer,
  user: userSlice.reducer,
};

export default rootReducer;
