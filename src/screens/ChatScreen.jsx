import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ChatHeader from "../components/ChatHeader";
import { StatusBar } from "expo-status-bar";
import ReturnButton from "../components/ReturnButton";
import CallOption from "../components/CallOption";

const ChatScreen = () => {
  const route = useRoute();
  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: "#fff", width: "100%" }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <ReturnButton />
        <ChatHeader
          image={route.params.contactPhoto}
          name={route.params.contactName}
          status={route.params.online}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
