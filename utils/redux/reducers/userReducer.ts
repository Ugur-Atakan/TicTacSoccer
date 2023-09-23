import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  userData: any;
  isLoading: boolean;
  accessToken: string;
}

// Define the initial state using that type
const initialState: UserState = {
  isLoggedIn: false,
  isLoading: true,
  userData: null,
  accessToken: '',
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{
        user: any;
        accessToken: string;
      }>,
    ) => {
      state.isLoggedIn = true;
      state.userData = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoading = false;
    },
    logoutSuccess: state => {
      state.isLoggedIn = false;
      state.userData = null;
      state.accessToken = '';
    },
    initialTokenLoad: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
    }
  },
});

export const {loginSuccess, logoutSuccess, initialTokenLoad} =
  userReducer.actions;
export default userReducer.reducer;
