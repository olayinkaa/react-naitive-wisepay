// components/forms/rhf/DropdownField.tsx
import { colors } from "@/constants/theme";
import { Controller, FieldValues } from "react-hook-form";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { BaseControlledProps } from "../types";

type Option<T = string> = {
  label: string;
  value: T;
};

type DropdownFieldProps<
  T extends FieldValues,
  TValue = string,
> = BaseControlledProps<T> & {
  data: Option<TValue>[];
};

export default function DropdownField<T extends FieldValues, TValue = string>({
  name,
  control,
  label,
  placeholder,
  data,
}: DropdownFieldProps<T, TValue>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View className="mb-4">
          {/* Label */}
          {label && (
            <Text className="mb-1 font-bold text-gray-800">{label}</Text>
          )}
          {/* Dropdown */}
          <Dropdown
            data={data}
            labelField="label"
            valueField="value"
            value={value}
            placeholder={placeholder || "Select option"}
            // ✅ Search enabled
            search
            searchPlaceholder="Search..."
            // ✅ RHF binding
            onChange={(item) => onChange(item.value)}
            // ✅ Styling
            style={{
              borderWidth: 1,
              borderColor: error ? "#ef4444" : "#d1d5db",
              borderRadius: 8,
              padding: 10,
              backgroundColor: colors["mist-100"],
            }}
            placeholderStyle={{ color: colors.mist, fontSize: 14 }}
            selectedTextStyle={{ color: "#111827", fontSize: 14 }}
            // ✅ Search input style
            inputSearchStyle={{
              borderRadius: 8,
              borderColor: "#d1d5db",
              paddingHorizontal: 10,
            }}
            // ✅ Better search behavior
            searchQuery={(keyword, labelValue) =>
              labelValue.toLowerCase().includes(keyword.toLowerCase())
            }
          />

          {/* Error */}
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

/**
 * sample usage
 * 
<DropdownField
    name="role"
    control={control}
    label="Select Role"
    placeholder="Choose a role"
    data={roleOptions}
/>
 * 
 */