import { BalanceDetailHeader } from "@/components/features/balance";
import { Button } from "@/components/ui/button";
import useScreen from "@/hooks/use-screen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function BalanceDetail() {
  const { containerWidth } = useScreen();

  return (
    <View className="flex-1 items-center">
      <ScrollView
        contentContainerStyle={{
          width: containerWidth,
          gap: 10,
          paddingTop: 10,
          paddingBottom: 20,
          // flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* header */}
        <BalanceDetailHeader />
        <View className="border border-border p-4 rounded-[14px] mt-2">
          <View className="items-center justify-center">
            <Text className="text-14 text-[#717182]">Available Balance</Text>
            <Text className="text-30 font-bold" style={{ marginVertical: 8 }}>
              $1200.43
            </Text>
            <Text className="text-14 text-[#717182]">Held: $50.00</Text>
            <Text className="text-14 text-[#717182]">Total: $1250.43</Text>
          </View>
        </View>
        <View className="flex-row mt-3 gap-3">
          <View className="bg-black flex-1 border border-border p-4 gap-2 rounded-lg items-center">
            <Ionicons name="send-sharp" size={25} color="white" />
            <Text className="text-14 font-medium text-white">Add Money</Text>
          </View>
          <View className="flex-1 bg-background border border-border p-4 gap-4 rounded-lg items-center">
            <Ionicons name="qr-code-outline" size={25} />
            <Text className="text-14 font-medium">Send</Text>
          </View>
          <View className="flex-1 bg-background border border-border p-4 gap-4 rounded-lg items-center">
            <Ionicons name="refresh-sharp" size={25} />
            <Text className="text-14 font-medium">Convert</Text>
          </View>
        </View>
        <View className="p-4 border border-border rounded-[14px] mt-5">
          <Text className="text-18 font-medium">Account Details</Text>
          <View className="flex-row items-center justify-between mt-4">
            <View>
              <Text className="text-16 font-medium">Account Number</Text>
              <Text className="text-14 text-[#717182]">1234567890</Text>
            </View>
            <Ionicons name="copy-outline" size={20} />
          </View>
          <View className="flex-row items-center justify-between mt-4">
            <View>
              <Text className="text-16 font-medium">Routing Number</Text>
              <Text className="text-14 text-[#717182]">026009593</Text>
            </View>
            <Ionicons name="copy-outline" size={20} />
          </View>
          <Pressable className="border border-border py-2 px-4 rounded-sm mt-4">
            {({ pressed }) => (
              <View
                style={{
                  opacity: pressed ? 0.4 : 1,
                }}
                className="flex-row items-center justify-center gap-4"
              >
                <Ionicons name="share-outline" size={20} />
                <Text className="text-14 font-medium">
                  Share Account Details
                </Text>
              </View>
            )}
          </Pressable>
        </View>
        {/* set rate alert */}
        <View className="p-4 border border-border rounded-[14px] mt-3">
          <Text className="text-18 font-medium">Exchange Rate</Text>
          <View>
            <View className="flex-row items-center justify-between mt-4">
              <View>
                <Text className="text-16 font-medium">1 USD = 1.00 USD</Text>
                <Text className="text-14 text-[#717182]">0.0000 (24h)</Text>
              </View>
              <Button label="Set Rate Alert" variant="outline" size="sm" />
            </View>
            <View className="flex-row items-center justify-between mt-4">
              <View>
                <Text className="text-16 font-medium">1 NGN = 1.00 USD</Text>
                <Text className="text-14 text-[#717182]">0.0002 (14h)</Text>
              </View>
              <Button label="Set Rate Alert" variant="outline" size="sm" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
