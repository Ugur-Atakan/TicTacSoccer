import io from 'socket.io-client';
export const socket = io('ws://185.95.165.218:5052', {
  autoConnect: true,
  transports: ['websocket', 'polling'],
});