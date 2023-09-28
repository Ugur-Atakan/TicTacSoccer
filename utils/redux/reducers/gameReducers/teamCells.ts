import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  teamCells: Array(6).fill(null),
  selectedTeamCell: null,
};

export const teamCellsSlice = createSlice({
  name: 'teamCells',
  initialState,
  reducers: {
    setTeamCells: (state, action) => {
      state.teamCells = action.payload;
    },

    setSelectedTeamCell: (state, action) => {
      state.selectedTeamCell = action.payload;
    },
    resetCells: state => initialState,
  },
});

export const {setTeamCells, setSelectedTeamCell, resetCells} =
  teamCellsSlice.actions;
export default teamCellsSlice.reducer;
