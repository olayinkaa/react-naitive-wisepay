import { BALANCE_DATA } from "@/lib/data";
import React from "react";
import { Text, View } from "react-native";
import { ActionTile } from "../shared/action-tile";

export function ActiveBalancesList() {
  return (
    <View className="mt-4">
      <Text className="text-lg font-semibold text-foreground">
        Active Balances
      </Text>
      <View className="gap-4 mt-3">
        {BALANCE_DATA.map((item) => (
          <ActionTile
            key={item.id}
            leading={item.flag}
            title={item.currencyCode}
            description={item.label}
            trailing={
              item.heldAmount ? (
                /* Dynamic rendering block specifically for slots containing held funds */
                <View className="gap-1 items-end">
                  <Text className="text-16 font-semibold text-foreground">
                    {item.balance}
                  </Text>
                  <Text className="text-14 text-mist">{item.heldAmount}</Text>
                </View>
              ) : (
                /* Fallback standard layout format for pure basic numbers */
                <Text className="font-semibold text-16 text-foreground">
                  {item.balance}
                </Text>
              )
            }
          />
        ))}
      </View>
    </View>
  );
}
