import { GlobalHeader } from "@/components/shared/global-header";
import { Stack } from "expo-router";
import React from "react";

export default function CardLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Cards", header: () => <GlobalHeader /> }}
      />
      <Stack.Screen
        name="[card-detail]"
        options={{ title: "Send Money" }}
      />
    </Stack>
  );
}
