import { useUser } from 'context/UserContext';
import React from 'react';
import { MessageType } from 'types';
import { formatDate } from 'utils/formatDate';

interface ChatProps {
  messages: Array<MessageType>;
}

const styles = {
  container: {
    height: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    backgroundColor: 'gray',
    margin: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  senderUser: {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
  },
  senderBot: {
    alignSelf: 'flex-start',
    backgroundColor: 'blue',
  },
};

export const Chat: React.FC<ChatProps> = ({ messages }) => {
  const { username } = useUser();

  return (
    <div style={styles.container}>
      {messages.map(message => {
        return (
          <div>
            <p style={username === message.sender ? styles.senderUser : styles.senderBot}>{message.message}</p>
            <p>{formatDate(message.date)}</p>
          </div>
        );
      })}
    </div>
  );
};
