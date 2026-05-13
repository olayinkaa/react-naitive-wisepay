import { THEME } from "@/lib/theme";
import { useColorScheme } from "nativewind"; // ← only change needed

export function useTheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();
  const theme = THEME[colorScheme ?? "light"];

  return {
    theme,
    colorScheme,
    isDark: colorScheme === "dark",
    setColorScheme, // setColorScheme("dark") / setColorScheme("light")
    toggleColorScheme, // flip between the two
  };
}

/**
 * 
 * 
 
// react-native → reads the OS system preference only
import { useColorScheme } from "react-native";

// nativewind → reads whatever class you've set on the root view
// (can be manually overridden, e.g. user toggles dark mode in-app)
import { useColorScheme } from "nativewind";

 * 
 * 
 */
