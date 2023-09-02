import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Header, Stories, Chats } from "../components/components";
import { StatusBar } from "expo-status-bar";

export default function ChatsScreen() {
  return (
    <SafeAreaView style={styles.ChatsScreen}>
      <StatusBar style="light" />
      <Header />
      <Stories />
      <Chats />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ChatsScreen: {
    flex: 1,
    backgroundColor: "#2b756b",
    width: "100%",
    gap: "35%",
  },
});
