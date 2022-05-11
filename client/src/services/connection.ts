import io, { Socket } from 'socket.io-client';
import { SOCKET_URL } from 'constants/';
import { MessageType } from 'types';

class Connection {
  private socket: Socket;

  constructor() {
    this.socket = io(SOCKET_URL);
  }

  // send message to bot
  public sendMessage(data: MessageType) {
    this.socket.emit('send-message', data);
  }

  // listen for bot's reply
  public listenForMessage(callback: (newMsg: MessageType) => void) {
    this.socket.on('receive-message', (message: MessageType) => {
      callback(message);
    });
  }
}

const ClientConnection = new Connection();

export { ClientConnection };
