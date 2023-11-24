import baseAPI from "../../http/base";
import { goNextRound, nextPlayer, play, resetGame, setTeamCells, started, sycnGame } from "../reducers/game.duck";
import  {socket} from "../../SocketService";

export const playOnline = (payload: any) => async (dispatch: any) => {
    await dispatch(play(payload));
    socket?.emit('play', payload);
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

export const finishGame = (roomCode:string) => (dispatch: any) => {
    dispatch(resetGame());
    socket?.emit('stop-game',{roomCode:roomCode});
};

export const nextPlayerTurn = () => async (dispatch: any) => {
    dispatch(nextPlayer());
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
