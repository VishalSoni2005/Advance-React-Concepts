import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Slice'; // Import the combined reducer

const store = configureStore({
  reducer: rootReducer,
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
