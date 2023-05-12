import React from 'react';
import {Federated} from '@callstack/repack/client';
import AppContainer from './src/navigation/AppContainer';
import {ActivityIndicator} from 'react-native';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);

function App() {
  return (
    <React.Suspense fallback={<ActivityIndicator size={'large'} />}>
      <AuthProvider>
        {(authContext: {token: string}) => {
          console.log('token', authContext.token);
          return <AppContainer />;
        }}
      </AuthProvider>
    </React.Suspense>
  );
}

export default App;
