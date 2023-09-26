import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import thunk from 'redux-thunk';
import authReducer from '../auth.duck';
import gameStatusReducer from '../reducers/gameReducers/gameStatus.duck';
import gameBoard from '../reducers/gameReducers/gameBoard';
import teamCellsSlice from '../reducers/gameReducers/teamCells';

export const store = configureStore({
  reducer: {
    user: userReducer,
    gameStatus: gameStatusReducer,
    gameBoard:gameBoard,
    teamCells:teamCellsSlice,
    auth: authReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
