import AccountLimit from "@/components/features/profile/account-limit";
import Security from "@/components/features/profile/security";
import useScreen from "@/hooks/use-screen";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  const { containerWidth } = useScreen();
  const { theme } = useTheme();
  return (
    <LinearGradient
      colors={theme.gradients.background2}
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          width: containerWidth,
          paddingVertical: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mt-0">
          <Text className="text-20 font-semibold">Profile</Text>
          <Text className="text-16 text-[#717182">
            Manage your account and preferences
          </Text>
        </View>
        <View className="border border-border p-5 rounded-[14px] mt-4">
          <View className="flex-row items-center gap-3">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
              }}
              height={64}
              width={64}
              style={{
                borderRadius: 999,
              }}
            />
            <View className="flex-1">
              <Text className="text-[#0A0A0A] text-18 font-semibold">
                Ibrahim Olayinka
              </Text>
              <Text className="text-[#717182] text-16" numberOfLines={1}>
                ibrahimolayinkaa@gmail.com
              </Text>
              <View
                style={styles.verifiedContainer}
                className="flex-row items-center mt-2"
              >
                <Ionicons name="refresh" size={18} />
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            </View>
            <TouchableOpacity className="border border-border px-3 py-2 rounded-sm ">
              <Text className="">Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Account limit */}
        <AccountLimit />
        {/* Security */}
        <Security />
        {/* Notification */}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  verifiedContainer: {
    backgroundColor: "#DCFCE7",
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  verifiedText: {
    color: "#016630",
  },
});
