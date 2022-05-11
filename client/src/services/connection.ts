import io, { Socket } from 'socket.io-client';
import { SOCKET_URL } from 'constants/';
import { MessageType } from 'types';

class Connection {
  public socket: Socket;

  constructor() {
    this.socket = io(SOCKET_URL);
  }

  public async sendMessage(data: MessageType) {
    await this.socket.emit('send-message', data);
  }

  public async listenForMessage(callback: (newMsg: MessageType) => void) {
    await this.socket.on('receive-message', (message: MessageType) => {
      callback(message);
    });
  }
}

const ClientConnection = new Connection();

export { ClientConnection };
