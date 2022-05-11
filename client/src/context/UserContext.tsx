import React from 'react';

type UserType = {
  username: string;
  setUsername: (newUsername: string) => void;
};

const defaultUser: UserType = {
  username: '',
  setUsername: value => value,
};

const UserContext = React.createContext<UserType>(defaultUser);

const UserProvider: React.FC = ({ children }) => {
  const [username, setUsername] = React.useState('');
  return <UserContext.Provider value={{ username, setUsername }}>{children}</UserContext.Provider>;
};

const useUser = (): UserType => React.useContext(UserContext);

export { UserProvider, useUser };
