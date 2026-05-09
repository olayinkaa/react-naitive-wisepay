import { linearGradient } from "@/constants/theme";
import useScreen from "@/hooks/use-screen";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

export default function Balances() {
  const { containerWidth } = useScreen();
  return (
    <LinearGradient
      colors={linearGradient.gradients.background}
      style={{
        flex: 1,
        alignItems: "center"
      }}
    >
      <View style={{ width: containerWidth }}>
        {/* Header */}
        <View className="mt-4">
          <Text className="text-20 font-semibold">Your Balances</Text>
          <Text className="text-16 text-[#717182]">
            Manage your multi-currency accounts
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
