import React from 'react';
import { Message } from 'components/Message';
import { MessageType } from 'types';

interface ChatProps {
  messages: Array<MessageType>;
}

const styles = {
  container: {
    height: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    backgroundColor: 'gray',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column' as const,
  },
};

export const Chat: React.FC<ChatProps> = ({ messages }) => {
  const endOfTheChatRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (endOfTheChatRef && endOfTheChatRef.current) {
      endOfTheChatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // eslint-disable-line

  return (
    <div style={styles.container}>
      {messages.map((message, idx) => (
        <Message message={message} key={`msg-${idx}`} />
      ))}
      <div ref={endOfTheChatRef} />
    </div>
  );
};
