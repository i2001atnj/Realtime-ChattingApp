import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const OptionalButton = ({ text, textColor }) => {
  return (
    <TouchableOpacity>
      <Text style={{ color: textColor, fontWeight: 500 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OptionalButton;
