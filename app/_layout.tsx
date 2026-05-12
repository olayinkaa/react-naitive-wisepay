import { NAV_THEME } from "@/lib/theme";
import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Toaster } from "react-native-sonner";
import "./global.css";

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
    <Stack
      screenOptions={{ headerShown: false }}
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
          headerShown: false,
          title: "New Action",
          sheetAllowedDetents: [0.7, 0.9], // Optional: allows partial height
          sheetGrabberVisible: true,
          sheetCornerRadius: 20,
          sheetElevation: 0,
          //  sheetLargestUndimmedDetentIndex:"last"
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme() === "dark" ? "dark" : "light";
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <SafeAreaProvider> */}
      <ThemeProvider value={NAV_THEME[colorScheme]}>
        <KeyboardProvider>
          <RootLayoutContent />
          <Toaster position="top-center" richColors closeButton />
          <PortalHost />
        </KeyboardProvider>
      </ThemeProvider>

      {/* </SafeAreaProvider> */}
    </GestureHandlerRootView>
  );
}
