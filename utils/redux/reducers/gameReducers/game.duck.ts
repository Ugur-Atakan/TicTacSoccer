import { createSlice } from '@reduxjs/toolkit';
import baseAPI from '../../../http/base';

const initialState = {
    gameData: {

    },
  gameStatus: false,
  isLoading: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.isLoading = true;
      baseAPI.get('game')
        .then((response) => {
          state.gameStatus = true;
          state.isLoading = false;
          state.gameData = response.data;
        });
    },
    stopGame: (state) => {
      state.gameStatus = false;
    },
  },
});

export const { startGame, stopGame } = gameSlice.actions;

export const selectGameStatus = (state: any) => state.game.gameStatus;

export default gameSlice.reducer;
