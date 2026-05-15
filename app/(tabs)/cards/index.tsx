import useScreen from "@/hooks/use-screen";
import { useTheme } from "@/hooks/use-theme";
import { CARD_DATA } from "@/lib/data";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Cards() {
  const { containerWidth, cardScrollHeight } = useScreen();
  const { theme } = useTheme();

  return (
    <LinearGradient
      colors={theme.gradients.background}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{ width: containerWidth }}>
          {/* Header */}
          <View className="my-4">
            <Text className="text-20 font-semibold">Your Cards</Text>
            <Text className="text-16 text-[#717182]">
              Manage your physical and virtual cards
            </Text>
          </View>
          <ScrollView
            className="gap-y-4"
            contentContainerStyle={styles.cardScrollViewContentStyle}
            style={[styles.cardScrollViewStyle, { height: cardScrollHeight }]}
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
          >
            {CARD_DATA.map((card) => (
              <View
                key={card.id}
                className="border border-border p-4 rounded-[14px] bg-background"
              >
                {/* Card Meta Data Row */}
                <View className="flex-row items-center">
                  <Ionicons
                    name={card.cardIcon}
                    size={20}
                    style={styles.icon}
                  />
                  <View className="flex-1 ml-2">
                    <Text className="text-16 font-medium">{card.type}</Text>
                    <Text className="text-14 text-[#717182]">
                      {card.cardNumber} • {card.currency}
                    </Text>
                  </View>
                  <View
                    style={[styles.status, { backgroundColor: card.statusBg }]}
                  >
                    <Text
                      className="text-12"
                      style={{ color: card.statusColor }}
                    >
                      {card.status}
                    </Text>
                  </View>
                </View>
                {/* Balance Summary Grid Row */}
                <View className="flex-row justify-between mt-4">
                  <View>
                    <Text className="text-14 text-[#717182]">
                      Available Balance
                    </Text>
                    <Text className="text-16 font-semibold">
                      {card.availableBalance}
                    </Text>
                  </View>
                  <View>
                    <Text className="text-14 text-[#717182]">
                      Spent This Month
                    </Text>
                    <Text className="self-end text-16 font-semibold">
                      {card.spentThisMonth}
                    </Text>
                  </View>
                </View>
                {/* Native Spacing Element */}
                <View style={styles.underline} />

                {/* Transaction Activity Footer Row */}
                <View className="flex-row items-center mt-4">
                  <Ionicons
                    name={card.lastTransaction.icon}
                    size={16}
                    color="#717182"
                  />
                  <Text className="flex-1 ml-2 text-14 text-[#717182]">
                    {card.lastTransaction.merchant}
                  </Text>
                  <Text className="text-14 text-[#0A0A0A]">
                    {card.lastTransaction.amount}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
          {/* create new card */}
          <View className="p-5 border border-border mt-5 rounded-[14px] bg-background items-center">
            <Ionicons name="add" size={25} style={styles.addIcon} />
            <View className="mt-3">
              <Text className="text-16 md:text-2xl text-[#0A0A0A] md:text-red-500 text-center font-medium">
                Order a new card
              </Text>
              <Text className="text-14 text-[#717182] text-center">
                Get a physical or virtual card for spending
              </Text>
            </View>
            <View className="mt-3 w-full gap-3">
              <View className="border border-border px-5 py-2 rounded-sm">
                <Pressable className="flex-row items-center justify-center gap-2">
                  <Ionicons name="card" />
                  <Text className="text-14 text-[#0A0A0A] font-medium">
                    Physical Card
                  </Text>
                </Pressable>
              </View>
              <View className="border border-border px-5 py-2 rounded-sm">
                <Pressable className="flex-row items-center justify-center gap-2">
                  <Ionicons name="card" />
                  <Text className="text-14 text-[#0A0A0A] font-medium">
                    Virtual Card
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  status: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  icon: {
    backgroundColor: "#ECECF0",
    padding: 10,
    borderRadius: 10,
  },
  underline: {
    width: "100%",
    height: 1,
    backgroundColor: "#ECECF0",
    marginTop: 10,
  },
  addIcon: {
    backgroundColor: "#ECECF0",
    padding: 10,
    borderRadius: 999,
    color: "green",
  },
  cardScrollViewContentStyle: {
    paddingVertical: 10,
    gap: 10,
  },
  cardScrollViewStyle: {
    height: 400,
  },
});
