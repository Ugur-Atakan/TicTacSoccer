import {createSlice} from '@reduxjs/toolkit';
import baseAPI from '../../http/base';
import { setPlayersData } from './gameReducers/gameBoard';

export interface IRoomState {
  roomCode: string;
  connectedSockets: any;
}

const initialState = {
  roomCode: '',
  connectedSockets: [] as any,
  connectedUsers: [] as any,
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    joinRoom: (state, action) => {
      state.roomCode = action.payload.roomCode;
      if (!state.connectedUsers.find((user: any) => user === action.payload.user)) {
        state.connectedUsers.push(action.payload.user);
      }
    },
    leaveRoom: (state, action) => {
      state.roomCode = '';
      state.connectedSockets = [];
    },
    updatejoinedUsers: (state, action) => {
      state.connectedUsers = action.payload.connectedUsers;
    },
  },
});


export const {joinRoom, leaveRoom,updatejoinedUsers} = roomSlice.actions;
export default roomSlice.reducer;

export const updateJoinedUsersState =(payload: any)=> {
  return (dispatch:any) => {
    dispatch(updatejoinedUsers(payload))
  }
}

export const roomPlayerstoGameBoard = (payload: any) => {
  return (dispatch: any) => {
    dispatch(setPlayersData(payload));
  };
};
export const createRoom = (payload: any) => {
  return async (dispatch: any) => {
    const room = await baseAPI.get('room/create-room');
    const payloadData = {
      roomCode: room.data.roomCode,
      user: payload.user,
    };
    dispatch(joinRoom(payloadData));
  };
};
