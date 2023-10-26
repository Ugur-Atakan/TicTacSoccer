import {PayloadAction} from '@reduxjs/toolkit';
import baseAPI from '../http/base';

const TYPES = {
  START_LOGIN: 'app/user/start-login',
  LOGIN_SUCCESS: 'app/user/login-success',
  LOGIN_FAIL: 'app/user/login-fail',
};

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  isLoggedIn: false,
};

const startRequest = () => {
  return {type: TYPES.START_LOGIN};
};

const loginSuccess = (user: any) => {
  return {
    type: TYPES.LOGIN_SUCCESS,
    user,
  };
};

const loginFail = (error: any) => {
  return {
    type: TYPES.LOGIN_FAIL,
    error,
  };
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPES.START_LOGIN:
      return {isLoggedIn: false, isLoading: true, user: null, error: null};
   
      case TYPES.LOGIN_SUCCESS:
      console.log("action.user", action.user);
      return {
        isLoggedIn: true,
        isLoading: false,
        user: action.user,
        error: null,
      };
      
    case TYPES.LOGIN_FAIL:
      return {isLoggedIn: false, isLoading: false, user: null, error: null};
    default:
      return state;
  }
};

export const loginUser = (credentials: any) => {
  return (dispatch: any) => {
    baseAPI.post('/auth/sign-in', {...credentials})
      .then(res => {
        dispatch(loginSuccess(res.data.profile))
      }
        )
      .catch(() => loginFail('Something Went Wrong'));
  };
};

export default authReducer;
