import { MAX_CARD_WIDTH, SCREEN_HORIZONTAL_PADDING } from "@/constants/layout";
import { colors } from "@/constants/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const GlobalHeader = () => {
  const { width } = useWindowDimensions();

  // Calculate width for centered content
  const containerWidth = Math.min(
    width - SCREEN_HORIZONTAL_PADDING, // Multiply by 2 for both sides
    MAX_CARD_WIDTH,
  );

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView
        style={{
          backgroundColor: "#fff",

          alignItems: "center", // Center the constrained container
        }}
      >
        {/* 2. Constrained container for the content */}
        <View
          className="flex-row justify-between items-center"
          style={{ width: containerWidth }}
        >
          {/* Logo Section */}
          <View className="flex-row items-center gap-2">
            <View className="w-10 h-10 bg-black rounded-xl items-center justify-center">
              <Text className="text-white text-xl font-bold">W</Text>
            </View>
            <Text className="text-xl font-bold tracking-tight text-black">
              WisePay
            </Text>
          </View>

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
      </SafeAreaView>
    </>
  );
};

export default function TabLayout() {
  const inset = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        header: () => <GlobalHeader />,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          height: 32 + inset.bottom,
          paddingTop: 0,
          borderWidth: 1,
          elevation: 0,
          marginHorizontal: 20,
          marginBottom: inset.bottom,
          borderRadius: 24,
          overflow: "hidden",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="balances"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cash-multiple"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          tabBarLabel: "Cards",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
