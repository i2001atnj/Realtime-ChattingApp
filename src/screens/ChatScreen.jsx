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
      <View style={{ height: "100%", backgroundColor: "#f0f0f0" }}>
        <ScrollView>
          {route.params.read ? (
            <></>
          ) : (
            <View
              style={{
                height: 25,
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                backgroundColor: "#a1caf522",
                marginTop: "2%",
              }}
            >
              <Text style={{ fontWeight: 600 }}>New Messages</Text>
            </View>
          )}
          <View
            style={{
              width: 200,
              alignItems: "flex-start",
              marginTop: "2%",
            }}
          >
            <View
              style={{
                backgroundColor: "#a1caf548",
                padding: 12,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                borderTopRightRadius: 25,
                width: "100%",
              }}
            >
              <Text style={{ color: "#000" }}>{route.params.lastMessage}</Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Text style={{ color: "#797C7B" }}>
                {route.params.lastMessageDate}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
