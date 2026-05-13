import { BALANCE_DATA } from "@/lib/data";
import React from "react";
import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router"; // 🌟 Import the router navigation hook
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
          /* 🌟 Wrap the tile in a Pressable bound to your new dynamic route directory path */
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
