import { QuickActionItem, SectionHeader } from "@/components/features/home";
import { ActionTile } from "@/components/shared/action-tile";
import LinearGradient from "@/components/ui/linear-gradient";
import { colors, linearGradient } from "@/constants/theme";
import useScreen from "@/hooks/use-screen";
import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const { containerWidth } = useScreen();
  return (
    <LinearGradient
      colors={linearGradient.gradients.background}
      className="flex-1 items-center"
    >
      <ScrollView
        contentContainerStyle={{
          width: containerWidth,
          gap: 10,
          paddingVertical: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Verification Banner */}
        <View className="border border-warning-300 bg-warning-background p-4 flex-row gap-6 rounded-[14px]">
          <View className="flex-1 flex-row items-center gap-2 ">
            <Ionicons
              name="warning-outline"
              size={24}
              style={{ color: colors["warning-400"] }}
            />
            <View className="gap-0">
              <Text className="text-warning-300 font-medium text-base">
                Verification in progress
              </Text>
              <Text className="max-w-55 text-warning-200">
                Complete your verification to unlock all features
              </Text>
            </View>
          </View>
          <TouchableOpacity className="border border-mist-400 p-2 rounded-lg bg-[#D9D9D94D] self-center">
            <Text className="font-medium">Continue</Text>
          </TouchableOpacity>
        </View>
        {/* Welcome */}
        <View className="flex-row items-center mt-4">
          <View className="flex-1">
            <Text className="text-20 font-semibold">
              Good morning, Olayinka
            </Text>
            <Text className="text-base text-[#A1A1A1]">
              Here&apos;s your financial overview
            </Text>
          </View>
          <View>
            <Pressable onPress={() => {}}>
              {({ pressed }) => (
                <Ionicons name={pressed ? "moon" : "moon-outline"} size={24} />
              )}
            </Pressable>
          </View>
        </View>
        {/* Balance Summary */}
        <LinearGradient
          colors={linearGradient.gradients.dark}
          className="p-6 rounded-2xl gap-2 mt-3"
        >
          <View className="flex-row items-center justify-between gap-0">
            <View>
              <Text className="text-14 text-white">Total Balance</Text>
              <Text className="text-30 font-bold text-white">$12,345.67</Text>
            </View>
            <Ionicons
              name="trending-up-sharp"
              size={20}
              color="white"
              style={{
                fontSize: 30,
                fontWeight: "condensedBold",
                borderRadius: 9999,
                backgroundColor: "#FFFFFF33",
                padding: 8,
              }}
            />
          </View>
          <View className="flex-row gap-2 items-center">
            <Ionicons name="trending-up" size={20} color="#4CAF50" />
            <Text className="text-14 text-white">+ 2.4% from last month</Text>
          </View>
        </LinearGradient>
        {/* Balance list  */}
        <View className="mt-5">
          <SectionHeader title="Your Balances" />
          <View className="gap-4">
            <ActionTile
              leading="🇺🇸"
              title="USD"
              description="Available"
              trailing="$1250.43"
            />
            <ActionTile
              leading="🇪🇺"
              title="EUR"
              description="Available"
              trailing="$890.22"
            />
            <ActionTile
              leading="🇪🇬"
              title="GBP"
              description="Available"
              trailing="$456.78"
            />
          </View>
        </View>
        {/* Quick action */}
        <View className="mt-5">
          <Text className="text-16 font-semibold mb-2">Quick Actions</Text>
          <QuickActionItem />
        </View>
        {/* Market Rates  */}
        <View className="mt-3">
          <SectionHeader title="Market Rates" />
          <View className="gap-4">
            <ActionTile
              leading={
                <Ionicons
                  name="trending-down"
                  size={20}
                  style={{
                    padding: 5,
                    borderRadius: 999,
                    backgroundColor: "#FFE2E2",
                    color: "#FF020E",
                  }}
                />
              }
              title="USD/EUR"
              description="-0.0023"
              trailing="0.8542"
            />
            <ActionTile
              leading={
                <Ionicons
                  name="trending-up"
                  size={20}
                  style={{
                    padding: 5,
                    borderRadius: 999,
                    backgroundColor: "#DCFCE7",
                    color: "#00C046",
                  }}
                />
              }
              title="GBP/USD"
              description="+0.0087"
              trailing="1.2456"
            />
            <ActionTile
              leading={
                <Ionicons
                  name="trending-up"
                  size={20}
                  style={{
                    padding: 5,
                    borderRadius: 999,
                    backgroundColor: "#DCFCE7",
                    color: "#00C046",
                  }}
                />
              }
              title="EUR/GBP"
              description="+0.0012"
              trailing="0.8734"
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
