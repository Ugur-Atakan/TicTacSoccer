import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { play } from './redux/reducers/gameReducers/gameBoard';
export const socket = io('https://uguratakan.com', {
  autoConnect: true,
  transports: ['websocket', 'polling'],
});

socket.on('connect', () => {
  console.log('connected');
} );

socket.on('disconnect', () => {
  console.log('disconnected');
});

socket.on('updated-cell', (data) => {
  const dispatch = useDispatch();
  dispatch(play(data));
  console.log('updated-cell', data);
});
