import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

interface UserState {
    name: string;
    email: string;
    profile_img: string;
}

const initialState : UserState = {
    email: '',
    name: '',
    profile_img: '',
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.profile_img = action.payload.profile_img;
      
      Cookies.set('profile_img', action.payload.profile_img, { expires: 7 }); // Persist profile image
      Cookies.set('name', action.payload.name, { expires: 7 }); // Persist email
    //  Cookies.set('email', action.payload.email, { expires: 7 }); // Persist email
    },
    deleteUser: (state) => {
      state.email = '';
      state.name = '';
      state.profile_img = '';
      
      Cookies.remove('profile_img'); // Clear profile image
      Cookies.remove('name'); // Clear email on logout
      Cookies.remove('email'); // Clear email on logout
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;