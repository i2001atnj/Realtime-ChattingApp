import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LogButton = ({ text, backgroundColor, to, textColor }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(to)}
      style={{
        width: "100%",
        backgroundColor: backgroundColor,
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: 600, color: textColor }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default LogButton;
