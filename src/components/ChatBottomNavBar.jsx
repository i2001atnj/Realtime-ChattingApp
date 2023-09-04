import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

const ChatBottomNavBar = () => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.Button}>
        <Image
          style={styles.ButtonImage}
          source={require("../assets/Path.png")}
        />
      </TouchableOpacity>
      <View style={styles.InputContainer}>
        <TextInput placeholder="Write your message" />
        <TouchableOpacity style={styles.Button}>
          <Image
            style={styles.ButtonImage}
            source={require("../assets/Stickers.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <TouchableOpacity style={styles.Button}>
          <Image
            style={styles.ButtonImage}
            source={require("../assets/Camera.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Image
            style={styles.ButtonImage}
            source={require("../assets/microphone.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatBottomNavBar;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "8%",
    backgroundColor: "#fff",
  },
  InputContainer: {
    backgroundColor: "#F3F6F6",
    flexDirection: "row",
    padding: 12,
    gap: 64,
    borderRadius: "12px",
  },
  Button: {
    height: 24,
    width: 24,
  },
  ButtonImage: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
});
