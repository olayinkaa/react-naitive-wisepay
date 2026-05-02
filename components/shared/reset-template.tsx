import { MAX_CARD_WIDTH, SCREEN_HORIZONTAL_PADDING } from "@/constants/layout";
import { Ionicons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import React from "react";
import {
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { StepIndicator } from "./step-indicator";
import Wrapper from "./wrapper";

const BACK_NAV_MAP: Record<number, { href: Href; label: string }> = {
  0: { href: "/(auth)/sign-in", label: "Back to Sign In" },
  1: { href: "/reset", label: "Back to Reset Password" },
};

interface ResetTemplateProps {
  title: string;
  description: React.ReactNode;
  iconName: keyof typeof Ionicons.glyphMap;
  currentStep: number;
  children: React.ReactNode;
}

export default function ResetTemplate({
  title,
  description,
  iconName,
  currentStep,
  children,
}: ResetTemplateProps) {
  const { width } = useWindowDimensions();
  const containerWidth = Math.min(
    width - SCREEN_HORIZONTAL_PADDING,
    MAX_CARD_WIDTH,
  );

  const backNav = BACK_NAV_MAP[currentStep] || BACK_NAV_MAP[0];

  return (
    <Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          bottomOffset={10}
        >
          <View className="flex-1 justify-center items-center">
            <View style={{ width: containerWidth }}>
              <View className="mb-4">
                <Link href={backNav.href} replace asChild>
                  <Pressable className="flex-row items-center gap-2">
                    <Ionicons name="arrow-back" size={16} color="black" />
                    <Text>{backNav.label}</Text>
                  </Pressable>
                </Link>
              </View>
              <View className="card w-full">
                <View className="items-center">
                  <View className="size-12 bg-[#0302131A] items-center justify-center rounded-full mb-4">
                    <Ionicons name={iconName} size={24} color="black" />
                  </View>
                  <Text className="font-sans-bold text-base mb-2">{title}</Text>
                  <View className="px-4">
                    {typeof description === "string" ? (
                      <Text className="text-mist text-center leading-5 font-sans">
                        {description}
                      </Text>
                    ) : (
                      // If it's a component, render it directly
                      description
                    )}
                  </View>
                </View>
                {children}
              </View>
              <StepIndicator total={3} current={currentStep} />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
}
