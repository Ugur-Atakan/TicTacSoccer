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
    incrementVolume: state => {
      if(state.soundVolume !<= 0.0499)
      state.soundVolume += 0.005;
    }
    ,
    decrementVolume: state => {
      if(state.soundVolume >= 0.001)
      state.soundVolume -= 0.005;
      console.log(state.soundVolume);
    },

    resetVolume: state => initialState,
  },
});

export const {setVolume,resetVolume,incrementVolume,decrementVolume} = soundVolume.actions;
export default soundVolume.reducer;
