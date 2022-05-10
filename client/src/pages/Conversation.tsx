import { IonButton } from '@ionic/react';
import { useUser } from 'context/UserContext';
import React from 'react';
import { useHistory } from 'react-router';
import { ClientConnection } from 'services/connection';

const Conversation: React.FC = () => {
  const { username } = useUser();
  const history = useHistory();
  const [messages, setMessages] = React.useState<Array<string>>([]);

  const handleUpdateMessage = React.useCallback((newMsg: string) => {
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

  const handleMessageSend = (e: React.MouseEvent) => {
    e.preventDefault();
    ClientConnection.sendMessage({ message: 'asdasd', sender: username, time: 1 });
  };

  return (
    <div>
      {username}
      <div>
        {messages.map((msg, idx) => (
          <span key={`msg-${idx}`}>{msg}</span>
        ))}
      </div>
      <IonButton onClick={handleMessageSend}>Sent message</IonButton>
    </div>
  );
};

export default Conversation;
