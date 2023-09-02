import { TouchableOpacity, Image } from "react-native";
import React from "react";

const CallOption = ({ image, style }) => {
  return (
    <TouchableOpacity>
      <Image source={image} style={style} />
    </TouchableOpacity>
  );
};

export default CallOption;
