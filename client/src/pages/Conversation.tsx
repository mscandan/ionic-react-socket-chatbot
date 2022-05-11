import { IonButton, IonItem, IonTextarea } from '@ionic/react';
import { Chat } from 'components';
import { useUser } from 'context/UserContext';
import React from 'react';
import { useHistory } from 'react-router';
import { ClientConnection } from 'services/connection';
import { MessageType } from 'types';

const Conversation: React.FC = () => {
  const { username } = useUser();
  const history = useHistory();
  const [messages, setMessages] = React.useState<Array<MessageType>>([]);
  const [currentMessage, setCurrentMessage] = React.useState('');

  const handleUpdateMessage = React.useCallback((newMsg: MessageType) => {
    setMessages(msgs => [...msgs, newMsg]);
  }, []);

  React.useEffect(() => {
    if (username.length === 0) {
      history.push('/');
    }
  }, [username, history]);

  React.useEffect(() => {
    ClientConnection.listenForMessage(handleUpdateMessage);
    return () => {
      setMessages([]);
    };
  }, [ClientConnection]); // eslint-disable-line

  const handleMessageSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage.length > 0 && currentMessage.trim().length > 0) {
      const msgData: MessageType = { message: currentMessage, sender: username, date: Date.now() };
      handleUpdateMessage(msgData);
      ClientConnection.sendMessage(msgData);
      setCurrentMessage('');
    }
  };

  return (
    <div style={{ height: 'calc(100% - 56px)', margin: '20px' }}>
      <Chat messages={messages} />
      <form onSubmit={handleMessageSend}>
        <IonItem>
          <IonTextarea
            placeholder="Write your message here"
            rows={2}
            value={currentMessage}
            onIonChange={e => setCurrentMessage(e.detail.value as string)}
          />
        </IonItem>
        <IonButton type="submit" onClick={handleMessageSend} expand="full">
          Sent message
        </IonButton>
      </form>
    </div>
  );
};

export default Conversation;
