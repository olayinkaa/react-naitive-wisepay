import { colors } from "@/constants/theme";
import { cn } from "@/lib/utils";
import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { BaseControlledProps } from "../types";

interface FormInputProps<T extends FieldValues> extends BaseControlledProps<T> {
  inputProps?: TextInputProps;
}

export default function TextField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  inputProps,
}: FormInputProps<T>) {
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

          <TextInput
            className={cn(
              "border p-3 rounded-lg bg-mist-200",
              error ? "border-destructive" : "border-mist-100",
              // isValid && "bg-[#E8F0FE]",
            )}
            value={value}
            onChangeText={(text) => {
              const cleaned =
                inputProps?.keyboardType === "number-pad"
                  ? text.replace(/[^0-9]/g, "")
                  : text;
              onChange(cleaned);
            }}
            // onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            placeholderTextColor={colors.mist}
            {...inputProps}
          />

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
