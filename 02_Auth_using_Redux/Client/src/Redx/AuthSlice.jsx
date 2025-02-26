import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn: false,
    user: null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {

        },
        logout: (state) => {
            state.isLoggedIn = false
            state.user = null
        }
    }
})

export const { setAuth, logout } = AuthSlice.actions
export default AuthSlice.reducer;