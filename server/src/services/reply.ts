import { MessageTemplates } from '../constants/messageTemplates';

class Reply {
  private messages: Array<string>;

  constructor() {
    this.messages = MessageTemplates;
  }

  public chooseRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * (this.messages.length - 0));
    return this.messages[randomIndex];
  }
}

const ReplyService = new Reply();

export { ReplyService };
