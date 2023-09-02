import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OptionalButton = ({ text, textColor, textStyle, screen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <Text style={[{ color: textColor, fontWeight: 500 }, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionalButton;
