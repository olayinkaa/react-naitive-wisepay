import { useRouter, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    // Check if the navigation state exists and is "ready"
    if (navigationState?.key) {
      // router.replace("/(auth)/sign-in");
      router.replace("/(tabs)/home");
    }
  }, [navigationState?.key, router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading WisePay...</Text>
    </View>
  );
}
