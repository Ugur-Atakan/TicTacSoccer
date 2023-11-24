import {Dispatch, createSlice} from '@reduxjs/toolkit';
import {Socket} from 'socket.io-client';

const initialState:any = {
  socket: undefined,
};

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    registerSocket: (state, action) => {
      state.socket = action.payload.socket;
    },
  },
});

export const {registerSocket} = socketSlice.actions;

export const registerSocketToRedux = (payload:any) => {
  return (dispatch: any) => {
    dispatch(registerSocket(payload));
  };
};

export default socketSlice.reducer;
