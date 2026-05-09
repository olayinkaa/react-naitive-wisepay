import { Stack } from "expo-router";
import React from "react";

export default function IdentityLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="(identity)/verify-identity"
    >
      <Stack.Screen name="(identity)/verify-identity" />
    </Stack>
  );
}
