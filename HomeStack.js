import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MessagesScreen, CallsScreen } from './screens/index'

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={MessagesScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}