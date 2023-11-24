import baseAPI from "../../http/base";
import { goNextRound, nextPlayer, play, resetGame, setTeamCells, started, sycnGame } from "../reducers/game.duck";
import { socket } from "../../SocketService";

export const playOnline = (roomCode: string, userId: any, payload: any) => async (dispatch: any) => {
    await dispatch(play(payload));
    socket?.emit('play', { roomCode, userId, data: payload });
};

export const startGame = (roomCode: string) => async (dispatch: any) => {
    try {
        const teams = (await baseAPI.get("game")).data;
        dispatch(setTeamCells(teams));
        dispatch(started());
        socket?.emit('prepare-game', { roomCode: roomCode, teams: teams });
    } catch (error) {
        console.error("Bir şeyler yanlış gitti", error);
    }
};

export const startOnlineGame = () => (dispatch: any) => {
    dispatch(started());
}

export const updateTeamCells = (payload: any) => async (dispatch: any) => {
    await dispatch(setTeamCells(payload));
}

export const finishGame = (roomCode: any) => (dispatch: any) => {
    dispatch(resetGame());
    socket?.emit("finish-game", { roomCode: roomCode });
}

export const nextPlayerTurn = (roomCode: any) => async (dispatch: any) => {
    dispatch(nextPlayer());
    socket?.emit("next-player", { roomCode: roomCode });
}

export const nextRound = (roomCode: any) => async (dispatch: any) => {
    try {
        dispatch(goNextRound());
        const res = await baseAPI.get("game");
        dispatch(setTeamCells(res.data));
        dispatch(started());
        socket?.emit("next-round", { roomCode: roomCode });
    } catch (error) {
        console.error("Bir şeyler yanlış gitti", error);
    }
}

export const synchronizeGame = (data: any) => (dispatch: any) => {
    dispatch(sycnGame(data));
}

export const gameReset = () => (dispatch: any) => {
    dispatch(resetGame());
}

export const playListener = (payload: any) => (dispatch: any) => {
    dispatch(play(payload));
}

export const listenerNextPlayerTurn = () => (dispatch: any) => {
    dispatch(nextPlayer());
}

export const listenerNextRound = () => (dispatch: any) => {
    dispatch(goNextRound());
}

export const listenerFinishGame = () => (dispatch: any) => {
    dispatch(resetGame());
}
