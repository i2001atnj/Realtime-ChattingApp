import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ReturnButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", paddingHorizontal: "6%" }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require("../assets/back.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default ReturnButton;
