import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NewMessagesBanner = () => {
  return (
    <View style={styles.NewMessagesBanner}>
      <Text style={{ fontWeight: 600 }}>New Messages</Text>
    </View>
  );
};

export default NewMessagesBanner;

const styles = StyleSheet.create({
  NewMessagesBanner: {
    height: 35,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f5f3e4f1",
    marginTop: "5%",
  },
});
