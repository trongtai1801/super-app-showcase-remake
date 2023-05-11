import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/SignInScreen';
import { useAppSelector } from '../storage';
import AccountScreen from '../screens/AccountScreen';

const AppStack = createNativeStackNavigator();
const AppNavigator = () => {
  const auth = useAppSelector(state => state.auth);

  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      {auth.token ? (
        <AppStack.Screen name={'Account'} component={AccountScreen} />
      ) : (
        <AppStack.Screen name={'SignIn'} component={SignInScreen} />
      )}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
