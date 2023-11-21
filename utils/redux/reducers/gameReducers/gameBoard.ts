import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { socket } from '../../../socketService';
import { useDispatch } from 'react-redux';
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

const gameBoardReducer = createSlice({
  name: 'board',
  initialState,
  reducers: {
    play: (state, action) => {
      const index = action.payload.index;
      if (!state.soccerCells[index].data) {
        state.soccerCells[index] = action.payload.soccer;
        state.soccerCells[index].knowingPlayer = state.currentPlayer.id;
        if (checkWinner(state.soccerCells)==true) {
          try {
            state.winnerUserData = state.currentPlayer;
            state.scores[state.currentPlayer.id - 1] += 1;
          } catch (error:any) {
            Alert.alert('Bir şeyler yanlış gitti',error)
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

    setSelectedTeamCell: (state, action) => {
      state.selectedTeamCell = action.payload;
    },

    selectCellID: (state, action) => {
      state.selectedCellId = action.payload;
    },

    nextPlayer: (state) => {
      state.currentPlayer.id = state.currentPlayer.id === 1 ? 2 : 1;
    },

    goNextRound: (state) => {
      state.round = state.round + 1;
      state.selectedCellId= -1,
      state.selectedTeamCell= -1,
      state.currentPlayer= { id: 1 },
      state.winnerUserData= { id: null },
      state.teamCells= Array(6).fill(null),
      state.soccerCells=Array(9).fill(
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
    reset: () => initialState,
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

export const playOnline = (payload:any) => async (dispatch:any) => {
  socket?.emit('update-cell', payload);
  dispatch(play(payload));
};

export const { play, reset, nextPlayer, setWinnerPlayer, selectCellID, setTeamCells, setSelectedTeamCell,goNextRound,setPlayersData } = gameBoardReducer.actions;

export default gameBoardReducer.reducer;