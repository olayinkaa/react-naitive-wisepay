import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Cards() {
  return (
    <View>
      <Text>Cards</Text>
      <Link href="/cards/send-money">Send Money</Link>
    </View>
  );
}
