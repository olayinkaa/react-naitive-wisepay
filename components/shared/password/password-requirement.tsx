import React from "react";
import { Text, View } from "react-native";

export default function PasswordRequirement() {
  return (
    <View className=" bg-mist-200 p-3 rounded-10">
      <Text className="text-12 font-medium text-mist">
        Password requirements:
      </Text>
      <View className="ml-2 mt-1">
        <Text className="text-12 text-mist">- At least 8 characters</Text>
        <Text className="text-12 text-mist">
          - Must include uppercase and lowercase letters
        </Text>
        <Text className="text-12 text-mist">
          - Must include at least one number or symbol
        </Text>
      </View>
    </View>
  );
}
