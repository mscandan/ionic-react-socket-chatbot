import { useUser } from 'context/UserContext';
import React from 'react';
import { MessageType } from 'types';
import { formatDate } from 'utils/formatDate';

interface ChatProps {
  messages: Array<MessageType>;
}

const styles = {
  container: {
    height: '75%',
    maxHeight: '75%',
    overflow: 'auto',
    backgroundColor: 'gray',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column' as const,
  },
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

export const Chat: React.FC<ChatProps> = ({ messages }) => {
  const { username } = useUser();
  const endOfTheChatRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (endOfTheChatRef && endOfTheChatRef.current) {
      endOfTheChatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // eslint-disable-line

  return (
    <div style={styles.container}>
      {messages.map((message, idx) => {
        return (
          <div style={getStyles(username === message.sender)} key={`msg-${idx}`}>
            <p>
              <strong>{message.sender}</strong>
            </p>
            <p>{message.message}</p>
            <p>
              <i>{formatDate(message.date)}</i>
            </p>
          </div>
        );
      })}
      <div ref={endOfTheChatRef} />
    </div>
  );
};
