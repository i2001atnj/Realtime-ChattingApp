import { TouchableOpacity, Image } from "react-native";
import React from "react";

const CallOption = ({ image }) => {
  return (
    <TouchableOpacity>
      <Image source={image} />
    </TouchableOpacity>
  );
};

export default CallOption;
