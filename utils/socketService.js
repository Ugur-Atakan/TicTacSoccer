import io from 'socket.io-client';
export const socket = io('ws://192.168.1.110:5052', {
  autoConnect: true,
  transports: ['websocket', 'polling'],
});