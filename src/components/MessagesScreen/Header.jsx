import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.Header}>
      <TouchableOpacity style={styles.SearchButton}>
        <Image source={require("../../assets/searchVector.png")} />
      </TouchableOpacity>
      <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 500 }}>
        Chats
      </Text>
      <TouchableOpacity
        style={{ borderWidth: 1, borderRadius: 50, borderColor: "#363F3B" }}
      >
        <Image
          source={require("../../assets/profilePhoto.png")}
          style={{ height: 40, width: 40, borderRadius: 50 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "5.5%",
  },
  SearchButton: {
    backgroundColor: "#24786D",
    height: 44,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#363F3B",
  },
});
