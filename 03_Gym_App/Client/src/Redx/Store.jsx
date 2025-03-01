import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice"; // Import your slice

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
