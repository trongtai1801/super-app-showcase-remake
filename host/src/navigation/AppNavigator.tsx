import {Federated} from '@callstack/repack/client';
import React from 'react';
import FallbackComponent from '../components/FallbackComponent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);

const SignInScreen = React.lazy(() =>
  Federated.importModule('auth', './SignInScreen'),
);

const AccountScreen = React.lazy(() =>
  Federated.importModule('auth', './AccountScreen'),
);

const Booking = React.lazy(() =>
  Federated.importModule('booking', './AppNavigator'),
);

const BookingStack = () => (
  <React.Suspense fallback={<FallbackComponent />}>
    <Booking />
  </React.Suspense>
);

const AccountNavigator = createNativeStackNavigator();
const AccountStack = () => (
  <AccountNavigator.Navigator screenOptions={{headerShown: false}}>
    <AccountNavigator.Screen name={'Account'} component={AccountScreen} />
  </AccountNavigator.Navigator>
);

const BottomTabNavigator = createBottomTabNavigator();
const BottomTabStack = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name="booking" component={BookingStack} />
      <BottomTabNavigator.Screen name="account" component={AccountStack} />
    </BottomTabNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <AuthProvider>
        {(authContext: {token: string}) => {
          return authContext.token ? (
            <BottomTabStack />
          ) : (
            <React.Suspense fallback={<FallbackComponent />}>
              <SignInScreen />
            </React.Suspense>
          );
        }}
      </AuthProvider>
    </React.Suspense>
  );
};

export default AppNavigator;
