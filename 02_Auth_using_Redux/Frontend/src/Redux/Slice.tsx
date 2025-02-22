//! step one : create Slice
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        removeToken: (state) => {
            state.token = null;
        },
    },
})

//! step two : export actions
export const { setToken, removeToken } = authSlice.actions;

//! step three : export reducer
export default authSlice.reducer;