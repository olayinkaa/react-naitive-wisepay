import { GlobalHeader } from "@/components/shared/global-header";
import { Stack } from "expo-router";
import React from "react";

export default function BalanceLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <GlobalHeader />,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Balance" }} />
      <Stack.Screen name="[balance-detail]" options={{ title: "Send Money" }} />
    </Stack>
  );
}
