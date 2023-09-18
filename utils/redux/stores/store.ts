import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import {gameReducers} from '../reducers/gameReducers';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cells: gameReducers.cellsState,
    gameStatus: gameReducers.gameStatus,
    currentPlayer: gameReducers.currentPlayer,
    winner: gameReducers.winnerPlayer,
    modal: gameReducers.modalStatus,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
