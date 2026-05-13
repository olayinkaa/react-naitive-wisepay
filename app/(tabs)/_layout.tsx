import { GlobalHeader } from "@/components/shared/global-header";
import QuickActionFab from "@/components/shared/quick-action-fab";
import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter, useSegments } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const inset = useSafeAreaInsets();
  const segments = useSegments();
  const router = useRouter();
  const isRootTab = segments.length <= 2;
  return (
    <>
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
            tabBarLabel: "Balances",
            headerShown: false,
            popToTopOnBlur: true, // reset
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
      {isRootTab && (
        <QuickActionFab onPress={() => router.push("/quick-action")} />
      )}
    </>
  );
}
