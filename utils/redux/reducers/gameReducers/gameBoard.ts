import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { finishGame } from './gameStatus.duck';
interface Square {
  isCorrect: boolean;
  knowingPlayer: number;
  data: {
    playerid: number;
  };
}

const initialState: any = {
scores:[0,0],
  selectedCellId: -1,
  selectedTeamCell: -1,
  currentPlayer: { id: 1 },
  winnerUserData: null,
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

        if (checkWinner(state.soccerCells)) {
          state.winnerUserData = state.currentPlayer;
          state.scores[state.currentPlayer.id-1] += 1;
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

    setWinnerPlayer: (state, action: PayloadAction<any>) => {
      state.winnerUserData = action.payload;

    },

    reset: () => initialState,

  },
});

// const checkWinner = (squares: Square[]): boolean => {
//   const winningLines: number[][] = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < winningLines.length; i++) {
//     const [a, b, c] = winningLines[i];
//     if (squares[a].isCorrect && squares[b].isCorrect && squares[c].isCorrect) {
//       return true;
//     }
//   }
//   return false;
// };

function checkWinner(Data) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Yatay kazanma kombinasyonları
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Dikey kazanma kombinasyonları
    [0, 4, 8], [2, 4, 6]             // Çapraz kazanma kombinasyonları
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    const valueA = Data[a].knowingPlayer;
    const valueB = Data[b].knowingPlayer;
    const valueC = Data[c].knowingPlayer;

    if ((valueA==!null && valueB==!null && valueC==!null)&&(valueA === valueB && valueB === valueC && valueA)) {
      return true; // oynayan oyuncu oyunu kazandı
    } else {
      return false;
    }
  }

  // Hiçbir oyuncu kazanmadıysa ve tahta dolu ise berabere.
  if (Object.values(Data).every(cell => cell)) {
    return "Berabere!";
  }

  // Henüz kazanan yok.
  return false;
}

export const { play, reset, nextPlayer, setWinnerPlayer, selectCellID, setTeamCells, setSelectedTeamCell } = gameBoardReducer.actions;

export default gameBoardReducer.reducer;