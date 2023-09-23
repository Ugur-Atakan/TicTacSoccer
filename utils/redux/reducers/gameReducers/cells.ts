import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  soccerCells: Array(9).fill(null),
  teamCells: Array(6).fill(null),
  selectedSoccerCell: null,
  selectedTeamCell: null,
};

export const cellsState = createSlice({
  name: 'cells',
  initialState,
  reducers: {
    setSoccerCells: (state, action) => {
      state.soccerCells = action.payload;
    },
    setTeamCells: (state, action) => {
      state.teamCells = action.payload;
    },
    setSelectedSoccerCell: (state, action) => {
      state.selectedSoccerCell = action.payload;
    },
    setSelectedTeamCell: (state, action) => {
      state.selectedTeamCell = action.payload;
    },
    resetCells: state => {
      state.soccerCells = Array(9).fill(null);
      state.teamCells = Array(6).fill(null);
      state.selectedSoccerCell = null;
      state.selectedTeamCell = null;
    },
  },
});

export const {
  setSoccerCells,
  setTeamCells,
  setSelectedSoccerCell,
  setSelectedTeamCell,
  resetCells,
} = cellsState.actions;
export default cellsState.reducer;
