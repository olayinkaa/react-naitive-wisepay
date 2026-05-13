import useScreen from "@/hooks/use-screen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function BalanceDetail() {
  const { containerWidth } = useScreen();
  const router = useRouter();

  return (
    <View className="flex-1 items-center">
      <ScrollView
        contentContainerStyle={{
          width: containerWidth,
          gap: 10,
          paddingVertical: 10,
          flex: 1,
        }}
      >
        {/* header */}
        <Pressable onPress={() => router.back()}>
          {({ pressed }) => (
            <View
              className="flex-row items-center mt-0"
              style={{
                opacity: pressed ? 0.4 : 1,
              }}
            >
              <Ionicons
                name="chevron-back"
                size={25}
                style={{
                  marginRight: 10,
                }}
              />
              <View className="flex-row gap-1 items-center">
                <Text className="text-2xl font-sans-semibold">🇺🇸</Text>
                <Text className="text-2xl font-sans-semibold">US Dollar</Text>
              </View>
            </View>
          )}
        </Pressable>
      </ScrollView>
    </View>
  );
}
