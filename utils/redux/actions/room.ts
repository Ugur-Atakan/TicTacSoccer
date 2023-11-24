import baseAPI from "../../http/base";
import { setPlayersData } from "../reducers/game.duck";
import { joinRoom, updatejoinedUsers } from "../reducers/roomReducer.duck";

export const joinRoomState = (payload: any) => {
    return (dispatch: any) => {
      dispatch(joinRoom(payload));
    };
  }
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