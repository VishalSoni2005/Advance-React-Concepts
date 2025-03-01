import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn: false,
    access_token: null,
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isLoggedIn = true
            state.access_token = action.payload
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.user = null
        }
    }
})

export const { setAuth, logout } = AuthSlice.actions
export default AuthSlice.reducer;