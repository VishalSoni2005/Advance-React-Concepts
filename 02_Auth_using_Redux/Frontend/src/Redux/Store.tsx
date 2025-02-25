import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import authReducer from './AuthSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer, // Add auth slice here if needed
  },
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
