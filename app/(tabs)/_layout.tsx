import SafeAreaView from "@/components/ui/safe-area-view";
import { MAX_CARD_WIDTH, SCREEN_HORIZONTAL_PADDING } from "@/constants/layout";
import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
        className="bg-white items-center border-b border-mist-100 pb-3"
        edges={["top"]}
      >
        <View
          className="flex-row justify-between items-center "
          style={{ width: containerWidth }}
        >
          {/* Logo Section */}
          <Link href={"/(auth)/sign-in"} asChild>
            <View className="flex-row items-center gap-2">
              <View className="w-10 h-10 bg-black rounded-xl items-center justify-center">
                <Text className="text-white text-xl font-bold">W</Text>
              </View>
              <Text className="text-xl font-bold tracking-tight text-black">
                WisePay
              </Text>
            </View>
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

export default function TabLayout() {
  const inset = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        header: () => <GlobalHeader />,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          // position: "absolute",
          // backgroundColor: "white",
          height: 32 + inset.bottom,
          paddingTop: 0,
          borderTopWidth: 0.5,
          elevation: 0,
          marginBottom: inset.bottom,
          // marginHorizontal: 15,
          // borderRadius: 24,
          // overflow: "hidden",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarLabelPosition: "below-icon", // default is 'beside-icon'
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: "white", // Your desired bottom safe area color
              marginBottom: -100, // Extends the color way past the bottom of the screen
            }}
          />
        ),
        // tabBarBackground: () => (
        //   <BlurView
        //     tint="light"
        //     intensity={50}
        //     style={StyleSheet.absoluteFill}
        //   />
        // ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="balances"
        options={{
          tabBarLabel: "Balance",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "wallet" : "wallet-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          tabBarLabel: "Payment",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "cash" : "cash-outline"}
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
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "card" : "card-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
