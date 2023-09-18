import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentPlayer: 'P1',
};

export const currentPlayer = createSlice({
  name: 'currentplayer',
  initialState,
  reducers: {
    setCurrentPlayer: (state, action) => {
      state.currentPlayer = action.payload;
    },
  },
});

export const {setCurrentPlayer} = currentPlayer.actions;
export default currentPlayer.reducer;
