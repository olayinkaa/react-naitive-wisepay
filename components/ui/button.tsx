import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  type PressableProps,
} from "react-native";
import { tv, type VariantProps } from "tailwind-variants";

const buttonStyles = tv({
  base: "flex-row items-center justify-center rounded-xl transition-all active:opacity-70",
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-muted",
      outline: "bg-transparent border border-border",
      destructive: "bg-destructive",
    },
    size: {
      sm: "px-3 py-1.5 h-9",
      md: "px-5 py-3 h-12",
      lg: "px-8 py-4 h-14",
    },
    fullWidth: { true: "w-full" },
    disabled: { true: "opacity-50", false: "" },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const textStyles = tv({
  base: "font-sans-semibold text-center",
  variants: {
    variant: {
      primary: "text-white",
      secondary: "text-foreground",
      outline: "text-foreground",
      destructive: "text-white",
    },
    size: {
      sm: "text-xs",
      md: "text-base",
      lg: "text-lg",
    },
  },
});

interface ButtonProps
  extends Omit<PressableProps, "disabled">,
    VariantProps<typeof buttonStyles> {
  label: string;
  loading?: boolean;
  labelClassName?: string;
  loaderColor?: string;
}

export const Button = ({
  label,
  variant,
  size,
  fullWidth,
  className,
  labelClassName,
  loading = false,
  disabled,
  loaderColor,
  ...props
}: ButtonProps) => {
  // Use "white" for dark backgrounds, "black" or theme color for light
  const defaultLoaderColor =
    variant === "primary" || variant === "destructive" ? "#FFFFFF" : "#081126";

  return (
    <Pressable
      // Disable press when loading
      disabled={disabled || loading}
      className={buttonStyles({
        variant,
        size,
        fullWidth,
        disabled: disabled || loading,
        className,
      })}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={loaderColor || defaultLoaderColor}
          size="small"
        />
      ) : (
        <Text
          className={textStyles({ variant, size, className: labelClassName })}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
};
