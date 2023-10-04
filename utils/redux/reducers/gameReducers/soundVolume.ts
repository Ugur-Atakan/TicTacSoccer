import {createSlice} from '@reduxjs/toolkit';

const initialState = {
 soundVolume:0.05,
};

export const soundVolumeSlice = createSlice({
  name: 'soundvolume',
  initialState,
  reducers: {
    setVolume: (state, action) => {
      state.soundVolume = action.payload;
    },
    resetVolume: state => initialState,
  },
});

export const {setVolume,resetVolume} = soundVolumeSlice.actions;
export default soundVolumeSlice.reducer;
