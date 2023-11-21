import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { socket } from '../../../socketService';
import baseAPI from '../../../http/base';
interface Square {
    isCorrect: boolean;
    knowingPlayer: number | null;
    data?: {
        age: number;
        country: number;
        dataId: number;
        height: number;
        id: number;
        name: string;
        position: string;
        weight: number;
    };
}

const initialState: any = {
    gameStatus: false,
    isLoading: false,
    round: 1,
    scores: [0, 0],
    selectedCellId: -1,
    selectedTeamCell: -1,
    playersData: [],
    currentPlayer: { id: 1 },
    winnerUserData: { id: null },
    teamCells: Array(6).fill(null),
    soccerCells: Array(9).fill(
        {
            isCorrect: false,
            knowingPlayer: null,
        }),
};

const GameReducer = createSlice({
    name: 'board',
    initialState,
    reducers: {

        fetching: (state) => {
            state.gameStatus = false;
            state.isLoading = true;
        },
        started: (state) => {
            state.gameStatus = true, state.isLoading = false;
        },
        finished: (state) => {
            state.gameStatus = false, state.isLoading = false
        },
        play: (state, action) => {
            const index = action.payload.index;
            if (!state.soccerCells[index].data) {
                state.soccerCells[index] = action.payload.soccer;
                state.soccerCells[index].knowingPlayer = state.currentPlayer.id;
                if (checkWinner(state.soccerCells) == true) {
                    try {
                        state.winnerUserData = state.currentPlayer;
                        state.scores[state.currentPlayer.id - 1] += 1;
                    } catch (error: any) {
                        Alert.alert('Bir şeyler yanlış gitti', error)
                    }
                } else {
                    state.currentPlayer.id = state.currentPlayer.id === 1 ? 2 : 1;
                }
            }
            return state;
        },

        setTeamCells: (state, action) => {
            state.teamCells = action.payload;
        },

        selectCellID: (state, action) => {
            state.selectedCellId = action.payload;
        },

        nextPlayer: (state) => {
            state.currentPlayer.id = state.currentPlayer.id === 1 ? 2 : 1;
        },
        goNextRound: (state) => {
            state.round = state.round + 1;
            state.selectedCellId = -1,
                state.selectedTeamCell = -1,
                state.currentPlayer = { id: 1 },
                state.winnerUserData = { id: null },
                state.teamCells = Array(6).fill(null),
                state.soccerCells = Array(9).fill(
                    {
                        isCorrect: false,
                        knowingPlayer: null,
                    })
        },
        setPlayersData: (state, action: PayloadAction<any>) => {
            state.playersData = action.payload.connectedUsers;
        },
        setWinnerPlayer: (state, action: PayloadAction<any>) => {
            state.winnerUserData = action.payload;
        },
        resetGame: () => initialState,
    },
});

const checkWinner = (Data: Square[]): boolean => {
    const winPatterns: number[][] = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Yatay kazanma kombinasyonları
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Dikey kazanma kombinasyonları
        [0, 4, 8], [2, 4, 6]             // Çapraz kazanma kombinasyonları
    ];
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (Data[a] && Data[b] && Data[c]) {
            const valueA = Data[a].knowingPlayer;
            const valueB = Data[b].knowingPlayer;
            const valueC = Data[c].knowingPlayer;

            if (valueA === valueB && valueB === valueC && valueA !== null) {
                return true; // oynayan oyuncu oyunu kazandı
            }
        }
    }
    return false; // oynayan oyuncu oyunu kaybetti
}

export const playOnline = (payload: any) => async (dispatch: any) => {
    socket?.emit('update-cell', payload);
    dispatch(play(payload));
};

export const startGame = () => async (dispatch: any) => {
    try {
        dispatch(fetching());
        const teams = (await baseAPI.get('game')).data;
        await dispatch(setTeamCells(teams))
        socket?.emit('start-game', {
            teams: teams,
        });
        dispatch(started())
    } catch (error) {
        console.error('Bir şeyler yanlış gitti', error);
    }
};

export const finishGame = () => async (dispatch: any) => {
    dispatch(finished());
    dispatch(resetGame());
};

export const nextRound = (payload: any) => async (dispatch: any) => {
    dispatch(goNextRound());
    baseAPI
        .get('game')
        .then(res => dispatch(setTeamCells(res.data)))
        .then(dispatch(started(payload)))
        .catch(() => console.error('Bir şeyler yanlış gitti'));
}

export const { play, resetGame, nextPlayer, setWinnerPlayer, selectCellID, setTeamCells, goNextRound, setPlayersData, fetching, started, finished } = GameReducer.actions;

export default GameReducer.reducer;