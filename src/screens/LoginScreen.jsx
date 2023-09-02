import { View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Separator from "../components/Separator";
import LoginOption from "../components/LoginOption";
import LogInput from "../components/LogInput";
import Title from "../components/Title";
import { StatusBar } from "expo-status-bar";
import LogButton from "../components/LogButton";
import OptionalButton from "../components/OptionalButton";
import ReturnButton from "../components/ReturnButton";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.LoginScreen}>
      <StatusBar style="auto" />
      <View style={{ width: "100%" }}>
        <ReturnButton />
      </View>
      <Title
        titleHeader="Log in to Chatbox"
        titleDescription="Welcome back! Sign in using your social account or email to continue us"
      />
      <View style={{ flexDirection: "row", gap: 22 }}>
        <LoginOption image={require("../assets/facebookLogo.png")} />
        <LoginOption image={require("../assets/googleLogo.png")} />
        <LoginOption image={require("../assets/appleLogo.png")} />
      </View>
      <Separator />
      <View style={{ width: "100%", gap: 30, paddingHorizontal: "6%" }}>
        <LogInput title="Your email" />
        <LogInput title="Your password" />
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: "6%",
          gap: 16,
          alignItems: "center",
        }}
      >
        <LogButton
          text="Log in"
          backgroundColor="#24786D"
          to="HomeStack"
          textColor="#fff"
        />
        <OptionalButton text="Forgot password?" textColor="#24786D" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  LoginScreen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    gap: "65%",
  },
});
