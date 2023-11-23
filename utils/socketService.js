import io from 'socket.io-client';
export const socket = io('https://uguratakan.com', {
  autoConnect: true,
  transports: ['websocket', 'polling'],
});