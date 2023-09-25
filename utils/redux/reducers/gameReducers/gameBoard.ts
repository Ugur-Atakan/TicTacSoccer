import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Square {
  isCorrect: boolean;
  data: {
    playerid: number;
  };
}

const initialState: any = {
  selectedCellId:-1,
  currentPlayer: {
    id: 1
  },
  winnerUserData: null,

  cells: Array(9).fill(
    {
      isCorrect:false
    }),
};

const gameBoardSlice = createSlice({
  name: 'board',
  initialState,

  reducers: {
    selectCellID: (state,action) => {
      state.selectedCellId = action.payload;
    },
    play: (state, action) => {
      console.log(action.payload);
      const index = action.payload.index;
      if (!state.cells[index].data) {
        state.cells[index] = action.payload.soccer;
        if (checkWinner(state.cells)) {
          state.winnerUserData = state.currentPlayer;
        } else {
          state.currentPlayer.id = state.currentPlayer.id === 1 ? 2 : 1;
        }
      }
      return state;
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



const checkWinner = (squares: Square[]): boolean => {
  const winningLines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a].isCorrect && squares[b].isCorrect && squares[c].isCorrect) {
      return true;
    }
  }

  return false;
};


export const { play, reset, nextPlayer, setWinnerPlayer, selectCellID } = gameBoardSlice.actions;

export default gameBoardSlice.reducer;