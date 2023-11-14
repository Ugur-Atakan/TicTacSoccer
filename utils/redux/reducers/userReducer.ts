import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import baseAPI from '../../http/base';
import { socket } from '../../socketService';
import AsyncStorage from '@react-native-async-storage/async-storage';

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


export const logoutUser = () => {
  return (dispatch: any) => {
    try {
      AsyncStorage.removeItem('accessToken');
      AsyncStorage.removeItem('user-data').then(() => {
        dispatch(logoutSuccess());
      }
      );
      dispatch(logoutSuccess());  
    } catch (error) {
      console.log(error);
    }
    
  };
};


export const loginUser = (credentials: any) => {
  return (dispatch: any) => {
    baseAPI.post('auth/sign-in', {...credentials})
      .then(res => {
        dispatch(loginSuccess({user: res.data.profile, accessToken: res.data.accessToken}))
        socket.emit('register-socket', {id: res.data.profile.id});
        console.log('sockete bağlantı gönderildi, id: ', res.data.profile.id);      
      })
      .catch(() => console.log('Something Went Wrong'));
  };
};
export const {loginSuccess, logoutSuccess, initialTokenLoad} = userReducer.actions;
export default userReducer.reducer;
