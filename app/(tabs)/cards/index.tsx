import { linearGradient } from "@/constants/theme";
import useScreen from "@/hooks/use-screen";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Cards() {
  const { containerWidth } = useScreen();
  return (
    <LinearGradient
      colors={linearGradient.gradients.background}
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={{ width: containerWidth }}>
        {/* Header */}
        <View className="mt-4">
          <Text className="text-20 font-semibold">Your Cards</Text>
          <Text className="text-16 text-[#717182]">
            Manage your physical and virtual cards
          </Text>
        </View>
        <Link href={"/cards/4"}>Click Me</Link>
      </View>
    </LinearGradient>
  );
}
