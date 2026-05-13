import type { ImageSourcePropType } from "react-native";

declare global {
  interface AppTab {
    name: string;
    title: string;
    icon?: ImageSourcePropType;
  }

  type Option<T = string> = {
    label: string;
    value: T;
  };

  export type ThemeOptions = "light" | "dark" | "system";

  interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
  }

  interface gradientScheme {
    gradients: {
      background: [string, string];
      // surface: [string, string];
      // primary: [string, string];
      // success: [string, string];
      // warning: [string, string];
      // danger: [string, string];
      // muted: [string, string];
      // empty: [string, string];
    };
  }
}

export {};
