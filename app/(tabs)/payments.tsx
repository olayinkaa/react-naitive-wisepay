import LinearGradient from "@/components/ui/linear-gradient";
import { linearGradient } from "@/constants/theme";
import useScreen from "@/hooks/use-screen";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

const TABS = ["Activity", "Recipients", "Scheduled", "Requests"] as const;

export default function Payments() {
  const [activeTab, setActiveTab] = useState<string>("Activity");
  const [search, setSearch] = useState("");
  const { containerWidth } = useScreen();

  return (
    <LinearGradient
      colors={linearGradient.gradients.background}
      className="flex-1 items-center"
    >
      <View style={{ width: containerWidth }}>
        {/* Header */}
        <View className="mt-4">
          <Text className="text-20 font-semibold">Payments</Text>
          <Text className="text-16 text-[#717182]">
            Send, receive, and manage your payments
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row mt-8 gap-3">
          <View className="bg-black flex-1 border border-border p-4 gap-2 rounded-lg items-center">
            <Ionicons name="send-sharp" size={25} color="white" />
            <Text className="text-14 font-medium text-white">Send</Text>
          </View>
          <View className="flex-1 border border-border p-4 gap-4 rounded-lg items-center">
            <Ionicons name="qr-code-outline" size={25} />
            <Text className="text-14 font-medium">Request</Text>
          </View>
          <View className="flex-1 border border-border p-4 gap-4 rounded-lg items-center">
            <Ionicons name="download-outline" size={25} />
            <Text className="text-14 font-medium">Receive</Text>
          </View>
        </View>

        {/* Search */}
        <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 mt-5 gap-2">
          <Ionicons name="search" size={25} />
          <TextInput
            className="flex-1 text-[15px] text-gray-900 p-0"
            placeholder="Search payments, recipients..."
            placeholderTextColor="#9CA3AF"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Animated Tab Bar */}
        <View className="flex-row bg-mist-100 rounded-full p-2 mt-5">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                activeOpacity={0.8}
                className="flex-1"
              >
                <Animated.View
                  style={{
                    width: "100%",
                    alignItems: "center",
                    paddingVertical: 8,
                    borderRadius: 999,
                    backgroundColor: isActive ? "#ffffff" : "transparent",
                    shadowOpacity: isActive ? 0.1 : 0,
                    shadowRadius: isActive ? 4 : 0,
                    shadowOffset: { width: 0, height: 1 },
                    shadowColor: "#000",
                    transitionProperty: [
                      "backgroundColor",
                      "shadowOpacity",
                    ] as any,
                    transitionDuration: 200,
                    transitionTimingFunction: "ease-in-out",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: isActive ? "700" : "500",
                      color: isActive ? "#030712" : "#6b7280",
                    }}
                  >
                    {tab}
                  </Text>
                </Animated.View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </LinearGradient>
  );
}
