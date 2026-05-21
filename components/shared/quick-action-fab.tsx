import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ms } from "react-native-size-matters";

export default function QuickActionFab({ onPress }: { onPress: () => void }) {
  const inset = useSafeAreaInsets();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        position: "absolute",
        right: ms(10),
        bottom: ms(80) + inset.bottom,
        backgroundColor: "black",
        width: ms(50),
        height: ms(50),
        borderRadius: ms(25),
        justifyContent: "center",
        alignItems: "center",
        elevation: ms(10),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: ms(0.3),
        shadowRadius: ms(4),
      }}
    >
      <Ionicons name="add" size={ms(32)} color="white" />
    </TouchableOpacity>
  );
}

{
  /* <TouchableOpacity
  style={{
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    bottom: 65 + inset.bottom,
  }}
  className="absolute right-3 bg-black w-14 h-14 rounded-full items-center justify-center"
>
  <Ionicons name="add" size={30} color="white" />
</TouchableOpacity>; */
}
