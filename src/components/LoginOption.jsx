import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const LoginOption = ({ image, style }) => {
  return (
    <TouchableOpacity style={[styles.RoundedButton, style]}>
      <Image source={image} />
    </TouchableOpacity>
  );
};

export default LoginOption;

const styles = StyleSheet.create({
  RoundedButton: {
    backgroundColor: "transparent",
    borderColor: "#000E08",
    borderWidth: 1,
    borderRadius: 100,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});
