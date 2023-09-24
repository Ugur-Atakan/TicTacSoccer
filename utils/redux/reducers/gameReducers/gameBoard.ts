import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Square {
  iscorred: boolean;
  data: {
    playerid: number;
  };
}

const initialState = {
  currentPlayer: {
    id: 1
  },
  winnerUserData: {
  },

  cells: Array(9).fill(null),
};

const gameBoardSlice = createSlice({
  name: 'board',
  initialState,

  reducers: {
    play: (state, action) => {
      if (state.winnerUserData !== null) {
        return;
      }
      const index = action.payload.index;
      if (state.cells[index] === null) {
        const newState = { ...state };
        newState.cells[index] = action.payload.soccer;

        if (checkWinner(newState.cells)) {
          newState.winnerUserData = newState.currentPlayer;
        } else {
          newState.currentPlayer.id = newState.currentPlayer.id === 1 ? 2 : 1;
        }
        return newState;
      }
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
    if (squares[a].iscorred && squares[b].iscorred && squares[c].iscorred) {
      return true;
    }
  }

  return false;
};


export const { play, reset, nextPlayer, setWinnerPlayer } = gameBoardSlice.actions;

export default gameBoardSlice.reducer;