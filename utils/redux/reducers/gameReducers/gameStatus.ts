import {createSlice} from '@reduxjs/toolkit';

interface GameState {
  gameStatus: boolean;
}

const initialState: GameState = {
  gameStatus: false,
};

export const gameStatus = createSlice({
  name: 'gamestatus',
  initialState,
  reducers: {
    gameStart: state => {
      state.gameStatus = true;
    },
    gameEnd: state => {
      state.gameStatus = false;
    },
  },
});

export const {gameStart, gameEnd} = gameStatus.actions;
export default gameStatus.reducer;
