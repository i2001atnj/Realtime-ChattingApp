import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { CONTACTS } from "../../data/contacts.js";

export default function Stories() {
  return (
    <View style={{ gap: 20 }}>
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          fontWeight: 600,
          marginLeft: "5%",
        }}
      >
        Stories
      </Text>
      <ScrollView
        horizontal
        style={{ width: "100%" }}
        showsHorizontalScrollIndicator={false}
      >
        {CONTACTS.map((contact) => (
          <TouchableOpacity
            key={contact.id}
            style={{
              gap: 10,
              marginLeft: 17,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderColor: contact.color,
                borderWidth: 2,
                borderRadius: 50,
                padding: 5,
              }}
            >
              <Image
                source={contact.photo}
                style={{ height: 62, width: 62, borderRadius: 50 }}
              />
            </View>
            <Text style={{ color: "#FFFFFF", fontWeight: 500 }}>
              {contact.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
