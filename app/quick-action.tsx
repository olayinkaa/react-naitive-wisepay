import { ActionTile } from "@/components/shared/action-tile";
import useScreen from "@/hooks/use-screen";
import { QuickActionItems } from "@/lib/data";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated"; // Import Reanimated
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function QuickAction() {
  const { containerWidth } = useScreen();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    // BlurView works best as an absolute background or a wrapper
    // <BlurView intensity={10} tint="light" style={StyleSheet.absoluteFill}>
    <View
      className="flex-1 items-center"
      style={{ paddingTop: insets.top - 30 }}
    >
      <View style={{ width: containerWidth }}>
        <View className="flex-row justify-between items-center px-4">
          <Text className="text-18 font-semibold">Quick Actions</Text>
          <Pressable onPress={() => router.dismiss()}>
            <Ionicons name="close" size={25} />
          </Pressable>
        </View>

        <View className="gap-3 mt-5 px-4">
          {QuickActionItems.map((item, index) => (
            <Animated.View
              key={item.id}
              // Staggered animation: each item waits 100ms longer than the last
              entering={
                FadeInDown.delay(index * 100)
                // .springify()
                // .damping(15)
              }
            >
              <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
                <ActionTile
                  leading={
                    <Ionicons
                      name={item.icon as any}
                      size={20}
                      style={{
                        backgroundColor: "#0302131A",
                        padding: 6,
                        borderRadius: 6,
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
            </Animated.View>
          ))}
        </View>
      </View>
    </View>
    // </BlurView>
  );
}
