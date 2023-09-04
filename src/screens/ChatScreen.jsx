import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ChatHeader from "../components/ChatHeader";
import { StatusBar } from "expo-status-bar";
import NewMessagesBanner from "../components/NewMessagesBanner";
import ChatBottomNavBar from "../components/ChatBottomNavBar";

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
      <View
        style={{ height: "85%", backgroundColor: "#f5f3e4a8", width: "100%" }}
      >
        <ScrollView>
          {!route.params.read ? <NewMessagesBanner /> : <></>}
          <View style={styles.MessageContainer}>
            <View style={styles.MessageBubble}>
              <Text style={{ color: "#000" }}>{route.params.lastMessage}</Text>
            </View>
            <View style={styles.MessageDateContainer}>
              <Text style={{ color: "#797C7B" }}>
                {route.params.lastMessageDate}
              </Text>
            </View>
          </View>
          <View style={styles.ReplyMessageContainer}>
            <View style={styles.ReplyMessageBubble}>
              <Text style={{ color: "#000" }}>Thanks</Text>
            </View>
            <View style={styles.MessageDateContainer}>
              <Text style={{ color: "#797C7B" }}>now</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <ChatBottomNavBar />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  MessageContainer: {
    width: 200,
    alignItems: "flex-start",
    marginTop: "5%",
    width: "100%",
    paddingRight: "50%",
    paddingLeft: "5%",
  },
  ReplyMessageContainer: {
    width: 200,
    alignItems: "flex-start",
    marginTop: "5%",
    width: "100%",
    paddingLeft: "50%",
    paddingRight: "5%",
  },
  ReplyMessageBubble: {
    backgroundColor: "#20A090",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
  },
  MessageBubble: {
    backgroundColor: "#ffffff",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
  },
  MessageDateContainer: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
