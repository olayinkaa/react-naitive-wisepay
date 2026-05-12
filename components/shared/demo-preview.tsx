import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import * as Haptics from "expo-haptics";
import * as React from "react";
import { Platform, View } from "react-native";

export function CheckboxPreview() {
  const [state, setState] = React.useState({
    termsChecked: true,
    terms2Checked: true,
    toggleChecked: false,
    toggle2Checked: false,
  });

  function toggleCheckedState(key: keyof typeof state) {
    return () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setState((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    };
  }

  return (
    <View className="flex flex-col gap-6">
      <View className="flex flex-row items-center gap-3">
        <Checkbox
          id="terms"
          checked={state.termsChecked}
          onCheckedChange={toggleCheckedState("termsChecked")}
        />
        <Label
          onPress={Platform.select({
            native: toggleCheckedState("termsChecked"),
          })}
          htmlFor="terms"
        >
          Accept terms and conditions
        </Label>
      </View>
    </View>
  );
}
