import io from 'socket.io-client';
export const socket = io('ws://192.168.1.41:5052', {
  autoConnect: true,
  transports: ['websocket', 'polling'],
});