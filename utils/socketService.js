import io from 'socket.io-client';
export const socket = io('https://uguratakan.com/socket', {
  autoConnect: true,
  transports: ['websocket', 'polling'],
});