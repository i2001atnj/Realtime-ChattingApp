import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const ChatScreen = () => {
  const route = useRoute();
  return (
    <View>
      <Text>{route.params.contactName}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
