import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import thunk from 'redux-thunk';
import authReducer from '../auth.duck';
import soundVolumeSlice from '../reducers/gameReducers/soundVolume';
import socketReducer from '../reducers/socketReducer';
import roomReducer from '../reducers/roomReducer';
import gameReducer from '../reducers/gameReducers/gameReducer.duck';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    socket: socketReducer,
    room: roomReducer,
    game:gameReducer,
    soundVolume: soundVolumeSlice,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
