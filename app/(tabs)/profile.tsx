import AccountLimit from "@/components/features/profile/account-limit";
import HelpAndLegal from "@/components/features/profile/help-legal";
import Notifications from "@/components/features/profile/notification";
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
import { ms, s } from "react-native-size-matters";

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
          paddingVertical: s(10),
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mt-0">
          <Text
            style={{
              fontSize: ms(20),
              fontWeight: "500",
            }}
          >
            Profile
          </Text>
          <Text
            style={{
              fontSize: ms(14),
              color: "#717182",
            }}
          >
            Manage your account and preferences
          </Text>
        </View>
        <View className="border border-border p-5 rounded-[14px] mt-4">
          <View className="flex-row items-center gap-3">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
              }}
              style={styles.image}
            />
            <View className="flex-1">
              <Text style={styles.title}>Ibrahim Olayinka</Text>
              <Text style={styles.description} numberOfLines={1}>
                ibrahimolayinkaa@gmail.com
              </Text>
              <View
                style={styles.verifiedContainer}
                className="flex-row items-center mt-2"
              >
                <Ionicons name="refresh" size={ms(18)} />
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.profileBtn}>
              <Text style={styles.profileBtnText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Account limit */}
        <AccountLimit />
        {/* Security */}
        <Security />
        {/* Notification */}
        <Notifications />
        {/* Help and Legal */}
        <HelpAndLegal />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    height: ms(64),
    width: ms(64),
    borderRadius: ms(32),
  },
  verifiedContainer: {
    backgroundColor: "#DCFCE7",
    alignSelf: "flex-start",
    paddingVertical: ms(4),
    paddingHorizontal: ms(10),
    borderRadius: ms(20),
  },
  profileBtn: {
    borderWidth: ms(1),
    borderColor: "#d4d4d4",
    paddingVertical: s(4),
    paddingHorizontal: s(8),
    borderRadius: ms(8),
  },
  profileBtnText: {
    fontSize: ms(14),
    fontWeight: "500",
  },
  verifiedText: {
    color: "#016630",
    fontSize: ms(12),
    lineHeight: ms(16),
  },
  title: {
    fontSize: ms(16),
    color: "#0A0A0A",
    fontWeight: "500",
  },
  description: {
    fontSize: ms(12),
    color: "#717182",
    fontWeight: "regular",
  },
});
