import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MessagesScreen,
  CallsScreen,
  ContactsScreen,
  SettingsScreen,
} from "../screens/screens";

import MessageIcon from "../assets/MessageIcon.png";
import MessageIconFocused from "../assets/MessageIconFocused.png";

import CallsIcon from "../assets/CallsIcon.png";
import CallsIconFocused from "../assets/CallsIconFocused.png";

import UserIcon from "../assets/UserIcon.png";
import UserIconFocused from "../assets/UserIconFocused.png";

import SettingsIcon from "../assets/SettingsIcon.png";
import SettingsIconFocused from "../assets/SettingsIconFocused.png";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let tabBarIcon;
          if (route.name === "Home") {
            tabBarIcon = focused ? MessageIconFocused : MessageIcon;
          }
          if (route.name === "Calls") {
            tabBarIcon = focused ? CallsIconFocused : CallsIcon;
          }
          if (route.name === "Contacts") {
            tabBarIcon = focused ? UserIconFocused : UserIcon;
          }
          if (route.name === "Settings") {
            tabBarIcon = focused ? SettingsIconFocused : SettingsIcon;
          }
          return <Image source={tabBarIcon} />;
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0A1832",
          borderTopWidth: 0,
          height: 90,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 500,
        },
      })}
    >
      <Tab.Screen name="Home" component={MessagesScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
