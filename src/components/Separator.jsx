import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Separator = () => {
  return (
    <View style={styles.Container}>
      <Image
        source={require("../assets/divider.png")}
        style={{ width: "40%" }}
      />
      <Text style={{ fontSize: 15, fontWeight: 500, color: "#797C7B" }}>
        OR
      </Text>
      <Image
        source={require("../assets/divider.png")}
        style={{ width: "40%" }}
      />
    </View>
  );
};

export default Separator;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    gap: 15,
    width: "100%",
    paddingHorizontal: "6%",
    alignItems: "center",
    justifyContent: "center",
  },
});
