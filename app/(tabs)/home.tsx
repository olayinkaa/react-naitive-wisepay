import { BalanceItem, SectionHeader } from "@/components/features/home";
import { colors, linearGradient } from "@/constants/theme";
import useScreen from "@/hooks/use-screen";
import { QuickActions } from "@/lib/data";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient as RNLinearGradient } from "expo-linear-gradient";
import { styled } from "nativewind";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LinearGradient = styled(RNLinearGradient);

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
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Verification Banner */}
        <View className="border border-warning-300 bg-warning-background p-4 mt-5 flex-row gap-6 rounded-[14px]">
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
            <Text className="text-[20px] font-semibold">
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
          <View className="flex-row items-center justify-between gap-4 mb-4">
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
            <BalanceItem flag="🇺🇸" currency="USD" amount="1250.43" />
            <BalanceItem flag="🇪🇺" currency="EUR" amount="890.22" />
            <BalanceItem flag="🇬🇧" currency="GBP" amount="456.78" />
          </View>
        </View>
        {/* Quick action */}
        <View className="mb-10 mt-5">
          <Text className="text-16 font-semibold mb-2">Quick Actions</Text>
          <View className="flex-row flex-wrap justify-between gap-y-4">
            {QuickActions.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.7}
                  className="w-[48.5%] border border-border items-center rounded-2xl p-5 gap-2 bg-white"
                >
                  <Ionicons name={item.icon} size={30} color={item.color} />
                  <Text className="text-16 font-semibold">{item.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row border border-border items-center rounded-2xl h-[85.5px] px-5 gap-2 bg-white mt-4"
          >
            <Ionicons name={"card-outline"} size={30} color="#B760FF" />
            <View>
              <Text className="text-16 font-semibold">Order Card</Text>
              <Text className="text-14 text-[#A1A1A1] font-semibold">
                Get a physical or virtual card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
