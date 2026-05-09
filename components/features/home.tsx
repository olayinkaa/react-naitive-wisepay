import { QuickActions } from "@/lib/data";
import { Ionicons } from "@expo/vector-icons";
import { Fragment } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const SectionHeader = ({ title }: { title: string }) => (
  <View className="flex-row justify-between items-center mb-4">
    <Text className="text-16 font-semibold">{title}</Text>
    <TouchableOpacity>
      <Text className="text-14 font-medium">View All</Text>
    </TouchableOpacity>
  </View>
);

export const BalanceItem = ({
  flag,
  currency,
  amount,
}: {
  flag: string;
  currency: string;
  amount: string;
}) => (
  <View className="flex-row justify-between items-center  bg-gray-50 p-4 rounded-2xl border border-border">
    <View className="flex-row items-center gap-3">
      <Text className="text-2xl">{flag}</Text>
      <View>
        <Text className="font-bold text-gray-800">{currency}</Text>
        <Text className="text-14">Available</Text>
      </View>
    </View>
    <Text className="font-semibold text-gray-900 text-16">${amount}</Text>
  </View>
);

export const QuickActionItem = () => (
  <Fragment>
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
  </Fragment>
);
