import { View, Text, Image } from "react-native";
import React from "react";
import CallOption from "./CallOption";
import ReturnButton from "./ReturnButton";

const ChatHeader = ({ image, name, status }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 15,
        alignItems: "center",
      }}
    >
      <ReturnButton />
      <Image source={image} />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
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
