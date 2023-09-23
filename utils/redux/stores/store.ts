import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import { gameReducers } from '../reducers/gameReducers';
import thunk from 'redux-thunk';
import authReducer from '../auth.duck';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cells: gameReducers.cellsState,
    gameStatus: gameReducers.gameStatus,
    currentPlayer: gameReducers.currentPlayer,
    winner: gameReducers.winnerPlayer,
    modal: gameReducers.modalStatus,
    auth: authReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;