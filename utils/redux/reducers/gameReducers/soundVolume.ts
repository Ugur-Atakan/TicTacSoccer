import {createSlice} from '@reduxjs/toolkit';

const initialState = {
 soundVolume:0.05,
};

export const soundVolume = createSlice({
  name: 'soundvolume',
  initialState,
  reducers: {
    setVolume: (state, action) => {
      state.soundVolume = action.payload;
    },
    resetVolume: state => initialState,
  },
});

export const {setVolume,resetVolume} = soundVolume.actions;
export default soundVolume.reducer;
