import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const LogInput = ({ title }) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#CDD1D0",
        gap: 16,
      }}
    >
      <Text style={{ color: "#24786D", fontWeight: 500 }}>{title}</Text>
      <TextInput style={styles.Input} />
    </View>
  );
};

export default LogInput;

const styles = StyleSheet.create({
  Input: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 12,
    width: "100%",
  },
});
