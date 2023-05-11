import React from 'react';

import AppContainer from './src/navigation/AppContainer';
import AuthProvider from './src/providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <AppContainer />
    </AuthProvider>
  );
}

export default App;
