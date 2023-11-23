import io from 'socket.io-client';
export const socket = io('ws://172.20.10.4:5052', {
  autoConnect: true,
  transports: ['websocket', 'polling'],
});