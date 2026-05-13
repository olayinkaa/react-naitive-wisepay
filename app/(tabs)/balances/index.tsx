import { ActiveBalancesList } from "@/components/features/balance";
import { ActionTile } from "@/components/shared/action-tile";
import useScreen from "@/hooks/use-screen";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Balance() {
  const { theme } = useTheme();
  const { containerWidth } = useScreen();
  const [search, setSearch] = useState("");

  return (
    <LinearGradient colors={theme.gradients.background} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          width: containerWidth,
          gap: 10,
          paddingVertical: 10,
          alignSelf: "center",
        }}
        // contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text className="text-20 font-semibold">Your Balance</Text>
          <Text className="text-16 text-[#717182]">
            Manage your multi-currency accounts
          </Text>
        </View>
        {/* search currencies  */}
        <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 mt-5 gap-2">
          <Ionicons name="search" size={25} />
          <TextInput
            className="flex-1 text-[15px] text-gray-900 p-0"
            placeholder="Search currencies..."
            placeholderTextColor="#9CA3AF"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        {/* active balance  */}
        <View>
          <ActiveBalancesList />
        </View>
        {/*  */}
        <View className="mt-5">
          <Text className="text-lg font-semibold text-foreground">
            Available Currencies
          </Text>
          <View className="gap-4 mt-3">
            <ActionTile
              leading="🇨🇦"
              title="CAD"
              description="Canadian Dollar"
              trailing={
                <View className="flex-row gap-5 items-center">
                  <Ionicons name="star-outline" size={20} color={theme.input} />
                  <TouchableOpacity className="flex-row items-center border border-border px-3 py-2 rounded-10">
                    <Ionicons
                      name="add"
                      size={20}
                      style={{
                        marginRight: 5,
                      }}
                    />
                    <Text>Enable</Text>
                  </TouchableOpacity>
                </View>
              }
            />
            <ActionTile
              leading="🇪🇺"
              title="EUR"
              description="Available"
              trailing={
                <View className="flex-row gap-5 items-center">
                  <Ionicons name="star-outline" size={20} color={theme.input} />
                  <TouchableOpacity className="flex-row items-center border border-border px-3 py-2 rounded-10">
                    <Ionicons
                      name="add"
                      size={20}
                      style={{
                        marginRight: 5,
                      }}
                    />
                    <Text>Enable</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
