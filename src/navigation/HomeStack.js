import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MessagesScreen, CallsScreen, ContactsScreen, SettingsScreen } from '../screens/screens'

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, 
      tabBarStyle: {
        backgroundColor: '#0A1832',
        borderTopWidth: 0
        }
      }}>
      <Tab.Screen name="Home" component={MessagesScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}