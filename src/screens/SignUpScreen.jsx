import { View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ReturnButton from "../components/ReturnButton";
import Title from "../components/Title";
import LogInput from "../components/LogInput";
import LogButton from "../components/LogButton";

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.SignUpScreen}>
      <StatusBar style="auto" />
      <View style={{ width: "100%" }}>
        <ReturnButton />
      </View>
      <Title
        titleHeader="Sign up with Email"
        titleDescription="Get chatting with friends and family today by signing up for our chat
          app!"
      />
      <View style={{ width: "100%", gap: 30, paddingHorizontal: "6%" }}>
        <LogInput title="Your name" />
        <LogInput title="Your email" />
        <LogInput title="Password" />
        <LogInput title="Confirm password" />
      </View>
      <View style={{ width: "100%", paddingHorizontal: "6%" }}>
        <LogButton
          text="Create an account"
          backgroundColor="#24786D"
          to="HomeStack"
          textColor="#fff"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SignUpScreen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    gap: "65%",
  },
});
