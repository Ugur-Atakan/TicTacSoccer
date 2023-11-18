import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import baseAPI from '../../http/base';
import { socket } from '../../socketService';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Credentials {
  email: string;
  password: string;
}
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


export const loginUser = (credentials: Credentials) => {
  return async (dispatch: any) => {
    try {
      const response = await baseAPI.post('auth/sign-in', { ...credentials });
      const { profile, accessToken } = response.data;
      dispatch(loginSuccess({ user: profile, accessToken }));
      socket.emit('register-socket', { id: profile.id });
      console.log('Sockete bağlantı gönderildi, id:', profile.id);
    }
    catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        if (errorMessage === 'Duplicate record') {
          console.error('Bu e-posta adresi zaten kayıtlı.');
        } else if (errorMessage === 'Not Found') {
          console.error('Kullanıcı bulunamadı.');
        } else {
          console.error('Bilinmeyen bir hata oluştu:', errorMessage);
        }
      } else {
        console.error('Bir hata oluştu:', error.message);
      }
    }
  };
};
export const { loginSuccess, logoutSuccess, initialTokenLoad } = userReducer.actions;
export default userReducer.reducer;
