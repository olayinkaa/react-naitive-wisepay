import { useTheme } from "@/hooks/use-theme";
import { NAV_THEME } from "@/lib/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Toaster } from "react-native-sonner";
import "./global.css";

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
  // const { setColorScheme } = useColorScheme();
  // useEffect(() => {
  //   const loadTheme = async () => {
  //     // await AsyncStorage.removeItem('theme');
  //     const stored = (await AsyncStorage.getItem("theme")) as ThemeOptions;
  //     if (stored) {
  //       setColorScheme(stored);
  //     } else {
  //       // Default to light if nothing or unexpected value is stored
  //       setColorScheme("light");
  //     }
  //   };

  //   loadTheme();
  // }, [setColorScheme]);

  const [fontsLoaded, fontError] = useFonts({
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 2000);
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

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
  // const { colorScheme } = useTheme();
  return (
    // <ThemeProvider value={NAV_THEME[colorScheme ?? "light"]}>
    <ThemeProvider value={NAV_THEME["light"]}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <SafeAreaProvider> */}
        <KeyboardProvider>
          <RootLayoutContent />
          <Toaster position="top-center" richColors closeButton />
          <PortalHost />
        </KeyboardProvider>

        {/* </SafeAreaProvider> */}
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
