import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { play } from './redux/reducers/gameReducers/gameBoard';
export const socket = io('https://uguratakan.com', {
  autoConnect: true,
  transports: ['websocket', 'polling'],
});