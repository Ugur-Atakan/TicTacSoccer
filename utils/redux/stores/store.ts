import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import thunk from 'redux-thunk';
import authReducer from '../auth.duck';
import gameStatusReducer from '../reducers/gameReducers/gameStatus.duck';
import gameBoardReducer from '../reducers/gameReducers/gameBoard';
import soundVolumeSlice from '../reducers/gameReducers/soundVolume';

export const store = configureStore({
  reducer: {
    user: userReducer,
    gameStatus: gameStatusReducer,
    gameBoard:gameBoardReducer,
    auth: authReducer,
    soundVolume: soundVolumeSlice,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
