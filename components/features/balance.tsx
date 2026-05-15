import { BALANCE_DATA } from "@/lib/data";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // 🌟 Import the router navigation hook
import React from "react";
import { Pressable, Text, View } from "react-native";
import { ActionTile } from "../shared/action-tile";

export function ActiveBalancesList() {
  const router = useRouter(); // 🌟 Initialize router control methods

  return (
    <View className="mt-4">
      <Text className="text-lg font-semibold text-foreground">
        Active Balances
      </Text>
      <View className="gap-4 mt-3">
        {BALANCE_DATA.map((item) => (
          /* Wrap the tile in a Pressable bound to your new dynamic route directory path */
          <Pressable
            key={item.id}
            onPress={() => router.push(`/balances/${item.id}`)}
          >
            <ActionTile
              leading={item.flag}
              title={item.currencyCode}
              description={item.label}
              trailing={
                item.heldAmount ? (
                  <View className="gap-1 items-end">
                    <Text className="text-16 font-semibold text-foreground">
                      {item.balance}
                    </Text>
                    <Text className="text-14 text-mist">{item.heldAmount}</Text>
                  </View>
                ) : (
                  <Text className="font-semibold text-16 text-foreground">
                    {item.balance}
                  </Text>
                )
              }
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export function BalanceDetailHeader() {
  const router = useRouter();

  return (
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
  );
}
