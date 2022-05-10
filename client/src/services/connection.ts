import io, { Socket } from 'socket.io-client';
import { SOCKET_URL } from 'constants/';

class Connection {
  private socket: Socket;

  constructor() {
    this.socket = io(SOCKET_URL);
  }

  public sendMessage(msg: string) {
    this.socket.emit('send-message', msg);
  }
}

const ClientConnection = new Connection();

export { ClientConnection };
