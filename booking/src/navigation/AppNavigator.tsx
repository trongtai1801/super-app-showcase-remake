import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';

const AppStack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name={'Home'} component={HomeScreen} />
      <AppStack.Screen name={'Booking'} component={BookingScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
