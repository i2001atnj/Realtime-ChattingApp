import { View, Text, Image } from "react-native";
import React from "react";

const Title = ({ titleHeader, titleDescription }) => {
  return (
    <View
      style={{
        width: "80%",
        paddingHorizontal: "6%",
        alignItems: "center",
        gap: 19,
      }}
    >
      <Text style={{ color: "#000", fontSize: 18, fontWeight: 600 }}>
        {titleHeader}
      </Text>
      <Image
        style={{ position: "absolute", right: "65%", zIndex: -1, top: "20%" }}
        source={require("../assets/stroke.png")}
      />
      <Text style={{ color: "#797C7B", textAlign: "center", fontWeight: 500 }}>
        {titleDescription}
      </Text>
    </View>
  );
};

export default Title;
