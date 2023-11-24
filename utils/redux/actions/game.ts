import baseAPI from "../../http/base";
import { goNextRound, nextPlayer, play, resetGame, setTeamCells, started, sycnGame } from "../reducers/game.duck";
import  {socket} from "../../SocketService";

//SOCKET EMITTER THUNKS

export const playOnline = (roomCode:string,userId:any, payload: any) => async (dispatch: any) => {
    await dispatch(play(payload));
    socket?.emit('play', { roomCode,userId, data:payload});
    console.log('Play online logu',{roomCode, userId, data:payload})

};

export const startGame = (roomCode:string) => async (dispatch: any) => {
    try {
        const teams = (await baseAPI.get('game')).data;
        await dispatch(setTeamCells(teams));
        dispatch(started())
        socket?.emit('prepare-game', { roomCode: roomCode, teams: teams });

    } catch (error) {
        console.error('Bir şeyler yanlış gitti', error);
    }
};

export const startOnlineGame = () => (dispatch: any) => {
    dispatch(started());
}

export const updateTeamCells = (payload: any) => async (dispatch: any) => {
    await dispatch(setTeamCells(payload));
}

export const finishGame = () => (dispatch: any) => {
    dispatch(resetGame());
};

export const nextPlayerTurn = (roomCode:any) => async (dispatch: any) => {
    dispatch(nextPlayer());
    socket?.emit('next-player',{roomCode:roomCode});
}


export const nextRound = () => (dispatch: any) => {
    dispatch(goNextRound());
    baseAPI
        .get('game')
        .then(res => dispatch(setTeamCells(res.data)))
        .then(dispatch(started()))
        .catch(() => console.error('Bir şeyler yanlış gitti'));
}

export const synchronizeGame = (data: any) => (dispatch: any) => {
    dispatch(sycnGame(data));
}

export const gameReset=()=>(dispatch:any)=>{
    dispatch(resetGame());
}

/// Path: utils/redux/actions/game.ts

//emit senders
/*
game start socket.emit('start-game',{roomCode:roomCode})
game finish
next round
next player turn
play
sync game
*/

//on listeners
/*
game start socket.on('start-game',()=>{})
game finish
next round
next player turn
play
sync game
*/


/// SOCKET LİSTENER THUNKS

export const playListener=(payload:any)=>(dispatch:any)=>{
    dispatch(play(payload));
}

export const listenerNextPlayerTurn = () => async (dispatch: any) => {
    dispatch(nextPlayer());
}