import { Socket } from 'socket.io';
import { MessageTemplates } from '../constants/messageTemplates';
import { MessageType } from '../types/message';

export class Reply {
  private messages: Array<string>;

  private socket: Socket;

  constructor(socket: Socket) {
    this.messages = MessageTemplates;
    this.socket = socket;
  }

  // chooses random message from pre-defined messages
  private chooseRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * (this.messages.length - 0));
    return this.messages[randomIndex];
  }

  // listens for message and sends random created reply
  public listenForMessage() {
    this.socket.on('send-message', (data: { message: string; sender: string; date: number }) => {
      console.log('user sent a message ', data);
      const replyData: MessageType = {
        message: this.chooseRandomMessage(),
        sender: 'bot',
        date: Date.now(),
      };
      this.replyToUser(replyData);
    });
  }

  // sends a random created message payload to user
  private replyToUser(data: MessageType) {
    this.socket.emit('receive-message', data);
  }
}
