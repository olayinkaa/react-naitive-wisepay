import { cn } from "@/lib/utils";
import { Ionicons } from "@expo/vector-icons"; // Ensure icon library is installed
import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { BaseControlledProps } from "../types";
import { colors } from "@/constants/theme";

interface PasswordFieldProps<T extends FieldValues>
  extends BaseControlledProps<T> {
  inputProps?: TextInputProps;
  isPasswordVisible: boolean;
  togglePassword: () => void;
}

export default function PasswordField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  inputProps,
  isPasswordVisible,
  togglePassword,
}: PasswordFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
        formState: { isValid },
      }) => (
        <View className="mb-4">
          {label && (
            <Text className="mb-1.5 font-bold text-gray-800">{label}</Text>
          )}

          <View className="relative justify-center">
            <TextInput
              className={cn(
                "border p-3 pr-12 rounded-lg bg-mist-200",
                error ? "border-destructive" : "border-mist-100",
                // isValid && "bg-[#E8F0FE]",
              )}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={colors.mist}
              secureTextEntry={!isPasswordVisible}
              autoCapitalize="none"
              {...inputProps}
            />

            <TouchableOpacity
              onPress={togglePassword}
              className="absolute right-3 p-1"
              activeOpacity={0.7}
            >
              <Ionicons
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={20}
                color="#6b7280"
              />
            </TouchableOpacity>
          </View>

          {error && (
            <Text className="text-destructive text-xs mt-1">
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
}
