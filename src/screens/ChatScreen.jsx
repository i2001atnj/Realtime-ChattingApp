import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ChatHeader from "../components/ChatHeader";
import { StatusBar } from "expo-status-bar";

const ChatScreen = () => {
  const route = useRoute();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <StatusBar style="auto" />
      <ChatHeader
        image={route.params.contactPhoto}
        name={route.params.contactName}
        status={route.params.online}
      />
      <ScrollView style={{ height: "100%", backgroundColor: "#dddddd31" }}>
        {route.params.read ? (
          <></>
        ) : (
          <View>
            <Text>New Messages</Text>
          </View>
        )}
        <View>
          <View
            style={{
              backgroundColor: "#a1b6c84a",
              padding: 12,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              borderTopRightRadius: 25,
              marginTop: 10,
              width: 200,
            }}
          >
            <Text style={{ color: "#000" }}>{route.params.lastMessage}</Text>
          </View>
          <Text style={{ color: "#797C7B" }}>
            {route.params.lastMessageDate}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
