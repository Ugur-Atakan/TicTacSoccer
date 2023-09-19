import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface WinnerState {
  winner: boolean;
  userData: any;
}

const initialState: WinnerState = {
  winner: false,
  userData: null,
};

export const winner = createSlice({
  name: 'winnerstate',
  initialState,
  reducers: {
    setWinnerPlayer: (state, action: PayloadAction<any>) => {
      state.winner = !!action.payload;
      state.userData = action.payload;
    },
  
  },
});

export const {setWinnerPlayer} = winner.actions;
export default winner.reducer;
