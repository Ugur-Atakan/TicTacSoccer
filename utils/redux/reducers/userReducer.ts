import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  userData: any;
}

// Define the initial state using that type
const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logoutSuccess: state => {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

export const {loginSuccess, logoutSuccess} = userReducer.actions;
export default userReducer.reducer;
