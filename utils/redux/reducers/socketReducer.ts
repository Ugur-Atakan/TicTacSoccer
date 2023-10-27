import {Dispatch, createSlice} from '@reduxjs/toolkit';
import {Socket} from 'socket.io-client';

export interface ISocketState {
  socket?: Socket;
}

const initialState: ISocketState = {
  socket: undefined,
};

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    registerSocket: (state, action) => {
      console.log(action);
      state.socket = action.payload.socket;
    },
  },
});

export const {registerSocket} = socketSlice.actions;

export const registerSocketToRedux = (payload: ISocketState) => {
  return (dispatch: any) => {
    dispatch(registerSocket(payload));
  };
};

export default socketSlice.reducer;
