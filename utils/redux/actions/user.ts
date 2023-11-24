import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginSuccess, logoutSuccess } from "../reducers/userReducer.duck";
import baseAPI from "../../http/base";
import { socket } from "../../SocketService";
import { Alert } from 'react-native';


interface Credentials {
    email: string;
    password: string;
  }

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
      }
      catch (error: any) {
        if (error.response) {
          const errorMessage = error.response.data.message;
          if (errorMessage === 'Duplicate record') {
            Alert.alert('Bu e-posta adresi zaten kayıtlı.');
            console.log('Bu e-posta adresi zaten kayıtlı.');
          } else if (errorMessage === 'Not Found') {
            console.log('Kullanıcı bulunamadı.');
            Alert.alert('Kullanıcı bulunamadı.');
          } else {
            Alert.alert('Bilinmeyen bir hata oluştu.',errorMessage);
          }
        } else {
          Alert.alert('Bilinmeyen bir hata oluştu.',error.message);
        }
      }
    };
  };