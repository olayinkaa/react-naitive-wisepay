import { cn } from "@/lib/utils";
import { View } from "react-native";

export const StepIndicator = ({ total = 3, current = 0 }) => (
  <View className="flex-row justify-center items-center gap-2 mt-8">
    {[...Array(total)].map((_, i) => (
      <View
        key={i}
        className={cn(
          "rounded-full transition-all duration-300 size-2",
          i <= current ? "bg-black" : "bg-gray-300",
        )}
      />
    ))}
  </View>
);
