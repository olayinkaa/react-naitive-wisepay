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
