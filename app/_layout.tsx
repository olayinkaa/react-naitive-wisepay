import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from "react-native-sonner";
import "./global.css";
import { Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
  const [fontsLoaded] = useFonts({
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  });
  useEffect(() => {
    // Hide splash only when both fonts and auth are loaded
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Don't render app until both are ready
  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}
    //  initialRouteName="(auth)"
     >
      {/* Ensure (auth) is the primary screen shown if index redirects there */}
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="reset"
        options={{
          presentation: "modal", // Optional: makes reset flow slide up like a sheet
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="quick-action"
        options={{
          presentation: "formSheet", // Native iOS FormSheet style
          headerShown: true,
          title: "New Action",
          sheetAllowedDetents: [0.5, 0.9], // Optional: allows partial height
          sheetGrabberVisible: true,
          sheetCornerRadius: 20
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <SafeAreaProvider> */}
        <KeyboardProvider>
          <RootLayoutContent />
          <Toaster position="top-center" richColors closeButton />
        </KeyboardProvider>
      {/* </SafeAreaProvider> */}
    </GestureHandlerRootView>
  );
}
