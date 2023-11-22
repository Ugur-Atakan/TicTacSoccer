// socketManager.ts
import {store} from '../redux/stores/store';
import { socket } from '../socketService';
import { sycnGame } from './reducers/gameReducers/gameReducer.duck';

let prevState = store.getState();

store.subscribe(() => {
  const currentState = store.getState();
  if (currentState.game) {
    if (currentState.game) {
      socket.emit('game-data-changed', currentState.game);
      console.log('game-data-changed-pushed');
    }
  }
prevState = currentState;
});

socket.on('game-data-changed', (gameData: any) => {
  console.log('game-data-changed event received:', gameData);
  if (gameData !== prevState.game) {
      store.dispatch(sycnGame(gameData)); 
      console.log('game-data-change-fetched');
  }
});