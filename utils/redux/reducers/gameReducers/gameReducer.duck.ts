import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
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
        sycnGame: (state, action: PayloadAction<any>) => {
            state.gameStatus = action.payload.gameStatus
            state.isLoading = action.payload.isLoading
            state.round = action.payload.round
            state.scores = action.payload.scores
            state.selectedCellId = action.payload.selectedCellId
            state.selectedTeamCell = action.payload.selectedTeamCell
            state.playersData = action.payload.playersData
            state.currentPlayer = action.payload.currentPlayer
            state.winnerUserData = action.payload.winnerUserData
            state.teamCells = action.payload.teamCells
            state.soccerCells = action.payload.soccerCells
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

export const playOnline = (payload: any) => (dispatch: any) => {
    dispatch(play(payload));
};

export const startGame = () => async (dispatch: any) => {
    try {
        const teams = (await baseAPI.get('game')).data;
        await dispatch(setTeamCells(teams));
        dispatch(started())
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
    dispatch(finished());
    dispatch(resetGame());
};

export const nextRound = (payload: any) => (dispatch: any) => {
    dispatch(goNextRound());
    baseAPI
        .get('game')
        .then(res => dispatch(setTeamCells(res.data)))
        .then(dispatch(started(payload)))
        .catch(() => console.error('Bir şeyler yanlış gitti'));
}

export const synchronizeGame = (data: any) => (dispatch: any) => {
    dispatch(sycnGame(data));
}


export const { play, resetGame, nextPlayer, setWinnerPlayer, selectCellID, setTeamCells, goNextRound, setPlayersData, started, finished, sycnGame } = GameReducer.actions;

export default GameReducer.reducer;