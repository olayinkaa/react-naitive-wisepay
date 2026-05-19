import { Stack, useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

export function ResetLayoutContent() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: { fontFamily: "sans-bold" },
        headerShadowVisible: false,
        // Add a global cancel button to the right side of the header
        headerRight: () => (
          <Pressable onPress={() => router.replace("/(auth)/sign-in")}>
            <Text className="text-red-500 font-sans-medium">Cancel</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Forgot Password",
          headerLargeTitleEnabled: true,
        }}
      />
      <Stack.Screen
        name="verify-code"
        options={{ title: "Verification", headerShown: false }}
      />
      <Stack.Screen
        name="new-password"
        options={{
          title: "New Password",
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack>
  );
}

export default function ResetLayout() {
  return <ResetLayoutContent />;
}
