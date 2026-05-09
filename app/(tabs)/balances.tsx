import LinearGradient from "@/components/ui/linear-gradient";
import { linearGradient } from "@/constants/theme";
import useScreen from "@/hooks/use-screen";
import React from "react";
import { Text, View } from "react-native";

export default function Balances() {
  const { containerWidth } = useScreen();
  return (
    <LinearGradient
      colors={linearGradient.gradients.background}
      className="flex-1 items-center"
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
