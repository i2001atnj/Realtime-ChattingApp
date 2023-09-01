import { View, Text, Image } from "react-native";
import React from "react";
import CallOption from "./CallOption";

const ChatHeader = ({ image, name, status }) => {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <Image source={image} />
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: 500 }}>{name}</Text>
        <Text style={{ fontSize: 12, color: "#797C7B" }}>
          {status ? "Active Now" : "Offline"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: "22%",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <CallOption image={require("../assets/call.png")} />
        <CallOption image={require("../assets/videocall.png")} />
      </View>
    </View>
  );
};

export default ChatHeader;
