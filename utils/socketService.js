import io from 'socket.io-client';
export const socket = io('ws://185.95.165.218:3003', {
  autoConnect: true,
  transports: ['websocket', 'polling'],
});
