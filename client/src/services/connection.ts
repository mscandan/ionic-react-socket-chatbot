import io, { Socket } from 'socket.io-client';
import { SOCKET_URL } from 'constants/';

class Connection {
  public socket: Socket;

  constructor() {
    this.socket = io(SOCKET_URL);
  }

  public async sendMessage(data: { message: string; sender: string; time: number }) {
    await this.socket.emit('send-message', data);
  }

  public async listenForMessage(callback: (newMsg: string) => void) {
    await this.socket.on('receive-message', (message: string) => {
      callback(message);
    });
  }
}

const ClientConnection = new Connection();

export { ClientConnection };
