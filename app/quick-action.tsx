import { ActionTile } from "@/components/shared/action-tile";
import useScreen from "@/hooks/use-screen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const QuickActionItems = [
  {
    id: 1,
    title: "Send Money",
    description: "Transfer money to friends and family",
    icon: "send-sharp",
  },
  {
    id: 2,
    title: "Request Money",
    description: "Create a payment request",
    icon: "qr-code-outline",
  },
  {
    id: 3,
    title: "Add Money",
    description: "Top up your account balance",
    icon: "download-outline",
  },
  {
    id: 4,
    title: "Convert Currency",
    description: "Exchange between currencies",
    icon: "swap-horizontal-outline",
  },
  {
    id: 5,
    title: "Order Card",
    description: "Get a physical or virtual card",
    icon: "card-outline",
  },
];

export default function QuickAction() {
  const { containerWidth } = useScreen();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View
      className="flex-1 items-center"
      style={{
        paddingTop: insets.top - 20,
      }}
    >
      <View
        style={{
          width: containerWidth,
        }}
      >
        <View className="flex-row justify-between items-center">
          <Text className="text-18 font-semibold">Quick Actions</Text>
          <Pressable onPress={() => router.dismiss()}>
            <Ionicons name="close" size={25} />
          </Pressable>
        </View>
        <View className="gap-3 mt-5">
          {QuickActionItems.map((item) => (
            <TouchableOpacity
              onPress={() => {}}
              key={item.id}
              activeOpacity={0.8}
            >
              <ActionTile
                leading={
                  <Ionicons
                    name={item.icon as any}
                    size={20}
                    style={{
                      backgroundColor: "#0302131A",
                      padding: 6,
                      borderRadius: 6,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                }
                title={item.title}
                description={
                  <Text className="text-[#717182] text-14">
                    {item.description}
                  </Text>
                }
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
