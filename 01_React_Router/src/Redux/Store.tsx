import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Define your slices here
  },
});

export type RootSrate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch; // For dispatching actions in your components.

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
