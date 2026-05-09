import { colors } from "@/constants/theme";
import useScreen from "@/hooks/use-screen";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const GlobalHeader = () => {
  const { containerWidth } = useScreen();

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView
        style={{
          backgroundColor: "white",
          alignItems: "center",
          borderBottomWidth: 1,
          borderColor: colors["mist-200"],
          paddingBottom: 10,
        }}
        edges={["top"]}
      >
        <View
          className="flex-row justify-between items-center "
          style={{ width: containerWidth }}
        >
          {/* Logo Section */}
          <Link href={"/(auth)/sign-in"} asChild>
            <TouchableOpacity
              activeOpacity={0.7}
              className="flex-row items-center gap-2"
            >
              <View className="w-10 h-10 bg-black rounded-xl items-center justify-center">
                <Text className="text-white text-xl font-bold">W</Text>
              </View>
              <Text className="text-xl font-bold tracking-tight text-black">
                WisePay
              </Text>
            </TouchableOpacity>
          </Link>

          {/* Icons Section */}
          <View className="flex-row items-center gap-4">
            <Pressable hitSlop={10}>
              <Ionicons name="search-outline" size={24} color="black" />
            </Pressable>

            <Pressable className="relative" hitSlop={10}>
              <Ionicons name="notifications-outline" size={24} color="black" />
              <View className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full items-center justify-center border-2 border-white">
                <Text className="text-white text-[8px] font-bold">2</Text>
              </View>
            </Pressable>
          </View>
        </View>
        {/* 2. Constrained container for the content */}
      </SafeAreaView>
    </>
  );
};
