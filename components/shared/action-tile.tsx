import React from "react";
import { Pressable, Text, View } from "react-native";

interface ActionTileProps {
  leading?: string | React.ReactNode;
  title: string;
  subtitle?: string | React.ReactNode;
  description?: string;
  trailing?: React.ReactNode;
  onPress?: () => void;
}

export const ActionTile = ({
  leading,
  title,
  description,
  trailing,
}: {
  leading: string | React.ReactNode;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  trailing?: string | React.ReactNode;
}) => (
  <View className="flex-row justify-between items-center  bg-gray-50 p-4 rounded-2xl border border-border">
    <View className="flex-row items-center gap-3">
      {typeof leading === "string" ? (
        <Text className="text-2xl">{leading}</Text>
      ) : (
        leading
      )}
      <View>
        {typeof title === "string" ? (
          <Text className="font-medium text-16">{title}</Text>
        ) : (
          title
        )}
        {typeof description === "string" ? (
          <Text className="text-14 #A1A1A1 ">{description}</Text>
        ) : (
          description
        )}
      </View>
    </View>
    {typeof trailing === "string" ? (
      <Text className="font-semibold text-16">{trailing}</Text>
    ) : (
      trailing
    )}
  </View>
);

export const ActionTile2 = ({
  leading,
  title,
  subtitle,
  description,
  trailing,
  onPress,
}: ActionTileProps) => {
  return (
    <Pressable
      onPress={onPress}
      // Uses tailwind style for the pressed state
      className="active:opacity-70"
      style={({ pressed }) => ({
        backgroundColor: pressed ? "#F9FAFB" : "white", // Slight gray on press
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#F3F4F6", // border-gray-100
        marginBottom: 12,
      })}
    >
      {/* 1. Leading Section (Avatar/Icon) */}
      {typeof leading === "string" ? (
        <Text className="text-2xl">{leading}</Text>
      ) : (
        leading
      )}
      {/* {leading && (
        <View className="w-10 h-10 bg-gray-50 rounded-full items-center justify-center mr-3">
          {leading}
        </View>
      )} */}

      {/* 2. Middle Content (Text Stack) */}
      <View className="flex-1">
        <Text className="font-bold text-gray-900 text-base" numberOfLines={1}>
          {title}
        </Text>

        <View className="mt-0.5">
          {typeof subtitle === "string" ? (
            <Text className="text-gray-500 text-xs">{subtitle}</Text>
          ) : (
            subtitle
          )}
        </View>

        {description && (
          <Text className="text-gray-400 text-[10px] mt-1">{description}</Text>
        )}
      </View>

      {/* 3. Trailing Section (Amount/Actions) */}
      {trailing && <View className="items-end ml-2">{trailing}</View>}
    </Pressable>
  );
};
