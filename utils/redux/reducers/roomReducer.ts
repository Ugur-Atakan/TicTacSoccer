import {createSlice} from '@reduxjs/toolkit';
import baseAPI from '../../http/base';

export interface IRoomState {
  roomCode: string;
  connectedSockets: any;
}

const initialState = {
  roomCode: '',
  connectedSockets: [] as any,
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    joinRoom: (state, action) => {
      state.roomCode = action.payload.roomCode;
      if (
        !state.connectedSockets.find((s: any) => s === action.payload?.socketId)
      )
        state.connectedSockets.push(action.payload?.socketId);
    },
    leaveRoom: (state, action) => {
      state.roomCode = '';
      state.connectedSockets = [];
    },
  },
});

export const {joinRoom, leaveRoom} = roomSlice.actions;
export default roomSlice.reducer;

export const joinRoomRedux = (payload: any) => {
  return async (dispatch: any) => {
    const room = await baseAPI.get('room/create-room');
    console.log('room', room.data)
    const payloadData = {
      roomCode: room.data.roomCode,
      socketId: payload.socketId,
    };
    dispatch(joinRoom(payloadData));
  };
};
