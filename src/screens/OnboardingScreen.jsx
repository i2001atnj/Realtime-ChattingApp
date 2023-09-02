import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import LoginOption from "../components/LoginOption";
import Separator from "../components/Separator";
import { StatusBar } from "expo-status-bar";
import LogButton from "../components/LogButton";
import OptionalButton from "../components/OptionalButton";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.OnboardingScreen}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/ellipse.png")}
        style={{
          resizeMode: "contain",
          height: 644,
          width: "100%",
          position: "absolute",
        }}
      />
      <View style={styles.Header}>
        <Image source={require("../assets/logo.png")} />
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>
          Chatbox
        </Text>
      </View>
      <View style={{ paddingHorizontal: "6%" }}>
        <Text style={{ fontSize: 68, color: "#FFFFFF" }}>Connect</Text>
        <Text style={{ fontSize: 68, color: "#FFFFFF" }}>friends</Text>
        <Text style={{ fontSize: 68, color: "#FFFFFF", fontWeight: 600 }}>
          easily &
        </Text>
        <Text style={{ fontSize: 68, color: "#FFFFFF", fontWeight: 600 }}>
          quick
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#B9C1BE",
            marginTop: 16,
          }}
        >
          Our chat app is the perfect way to stay connected with friends and
          family.
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 22 }}>
        <LoginOption
          style={{ borderColor: "#A8B0AF" }}
          image={require("../assets/facebookLogo.png")}
        />
        <LoginOption
          style={{ borderColor: "#A8B0AF" }}
          image={require("../assets/googleLogo.png")}
        />
        <LoginOption
          style={{ borderColor: "#A8B0AF" }}
          image={require("../assets/appleLogoWhite.png")}
        />
      </View>
      <Separator />
      <View style={{ width: "100%", paddingHorizontal: "6%" }}>
        <LogButton
          text="SIGN UP WITH MAIL"
          backgroundColor="#fff"
          textColor="#000"
          to="SignUpScreen"
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#B9C1BE" }}>Existing account?</Text>
        <OptionalButton
          text="Log in"
          textColor="#fff"
          textStyle={{ marginLeft: 10 }}
          screen="LoginScreen"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OnboardingScreen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    gap: "45%",
  },
  Header: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 6,
    width: "100%",
    paddingHorizontal: "6%",
  },
  SignUpWithMailButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
  },
});
