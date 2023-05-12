/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store, useAppSelector} from '../storage';

const AuthProvider = ({
  children,
}: {
  children: (authContext: {token: string}) => React.ReactNode;
}) => {
  const AuthProviderComponent = () => {
    const auth = useAppSelector(state => state.auth);
    const [authContext, setAuthContext] = useState({token: ''});

    useEffect(() => {
      console.log('auth.token', auth.token);
      setAuthContext({token: auth.token});
    }, [auth.token]);

    return (
      <AuthContext.Provider value={authContext}>
        {children(authContext)}
      </AuthContext.Provider>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProviderComponent />
      </PersistGate>
    </Provider>
  );
};

export default AuthProvider;
