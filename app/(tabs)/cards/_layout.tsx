import { Stack } from "expo-router";
import React from "react";

export default function CardLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Cards" }} />
      <Stack.Screen name="send-money" options={{ title: "Send Money" }} />
    </Stack>
  );
}
