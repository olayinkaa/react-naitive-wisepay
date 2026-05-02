import { linearGradient } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={linearGradient.gradients.background}
      className="flex-1"
    >
      <View
        className="flex-1"
        style={{
          paddingTop: insets.top, // Prevents content under the notch
          paddingBottom: insets.bottom,
        }}
      >
        {/* <View className="absolute inset-0 bg-black opacity-10" /> */}
        {children}
      </View>
    </LinearGradient>
  );
}
