import React from 'react';

const AuthContext = React.createContext({
  token: '',
});

const useAuth = () => React.useContext(AuthContext);

export {useAuth, AuthContext};
