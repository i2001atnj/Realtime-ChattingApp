import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Separator from "../components/Separator";
import LoginOption from "../components/LoginOption";
import LogInput from "../components/LogInput";
import Title from "../components/Title";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.LoginScreen}>
      <StatusBar style="dark" />
      <View style={{ width: "100%", paddingHorizontal: "6%" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/back.png")} />
        </TouchableOpacity>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeStack")}
          style={{
            width: "100%",
            backgroundColor: "#24786D",
            paddingVertical: 16,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 600, color: "#FFFFFF" }}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#24786D", fontWeight: 500 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
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
  RoundedButton: {
    backgroundColor: "#000000",
    borderColor: "#A8B0AF",
    borderWidth: 1,
    borderRadius: 100,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});
