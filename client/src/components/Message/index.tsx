import { useUser } from 'context/UserContext';
import React from 'react';
import { MessageType } from 'types';
import { formatDate } from 'utils/formatDate';

interface MessageProps {
  message: MessageType;
}

const styles = {
  messageBox: {
    borderRadius: '4px',
    padding: '2px 20px',
    margin: '4px',
    maxWidth: '80%',
  },
  senderUser: {
    alignSelf: 'flex-end',
    backgroundColor: '#65c466',
  },
  senderBot: {
    alignSelf: 'flex-start',
    backgroundColor: '#3b82f7',
  },
};

const getStyles = (isUser: boolean) => {
  if (isUser) return { ...styles.messageBox, ...styles.senderUser };
  return { ...styles.messageBox, ...styles.senderBot };
};

export const Message: React.FC<MessageProps> = ({ message }) => {
  const { username } = useUser();

  return (
    <div style={getStyles(username === message.sender)}>
      <p>
        <strong>{message.sender}</strong>
      </p>
      <p>{message.message}</p>
      <p>
        <i>{formatDate(message.date)}</i>
      </p>
    </div>
  );
};
