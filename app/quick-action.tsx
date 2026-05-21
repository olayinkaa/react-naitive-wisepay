import { ActionTile } from "@/components/shared/action-tile";
import { QuickActionItems } from "@/lib/data";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated"; // Import Reanimated
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ms, s } from "react-native-size-matters";

export default function QuickAction() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    // BlurView works best as an absolute background or a wrapper
    // <BlurView intensity={10} tint="light" style={StyleSheet.absoluteFill}>
    <View className="flex-1 items-center" style={{ paddingTop: insets.top }}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: s(30),
        }}
        showsVerticalScrollIndicator={false}
        className="flex-1 w-full"
      >
        {/*  */}
        <View className="flex-row justify-between items-center px-8">
          <Text style={styles.title}>Quick Actions</Text>
          <Pressable onPress={() => router.dismiss()}>
            <Ionicons name="close" size={ms(25)} />
          </Pressable>
        </View>
        {/*  */}
        <View className="gap-3 mt-5 px-8">
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
                      size={ms(20)}
                      style={{
                        backgroundColor: "#0302131A",
                        padding: s(6),
                        borderRadius: ms(6),
                      }}
                    />
                  }
                  title={item.title}
                  description={item.description}
                />
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </View>
    // </BlurView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: ms(16),
    fontWeight: "500",
  },
});
