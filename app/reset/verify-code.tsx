import { TextField } from "@/components/forms/rhf";
import ResetTemplate from "@/components/shared/reset-template";
import { Button } from "@/components/ui/button";
import { VerifyCodeInputs, verifyCodeSchema } from "@/validators/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Keyboard, Pressable, Text, View } from "react-native";

export default function VerifyCode() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();
  const { control, handleSubmit } = useForm<VerifyCodeInputs>({
    resolver: zodResolver(verifyCodeSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit: SubmitHandler<VerifyCodeInputs> = async (data) => {
    Keyboard.dismiss(); // Dismiss manually once logic starts
    try {
      console.log("FORM DATA:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/reset/new-password");
    } catch (error) {
      console.log("LOGIN ERROR:", error);
    }
  };

  return (
    <ResetTemplate
      title="Enter Reset Code"
      description={
        <View className="justify-center items-center">
          <Text className="text-mist">We&apos;ve sent a 6-digit code to</Text>
          <Text className="font-sans text-mist">{email}</Text>
        </View>
      }
      iconName="shield-outline"
      currentStep={1}
    >
      <View className="mt-5">
        <TextField
          name="code"
          control={control}
          label="Reset Code"
          placeholder="Enter 6-digit code"
          inputProps={{
            keyboardType: "number-pad",
            maxLength: 6,
          }}
        />
      </View>
      <View className="gap-3">
        <View className="jutify-center items-center gap-3">
          <Text className="text-mist">Didn&apos;t receive the code? </Text>
          <Pressable
            style={({ pressed }) => ({
              transform: [{ scale: pressed ? 0.96 : 1 }],
              opacity: pressed ? 0.8 : 1,
            })}
            className="will-change-variable"
            onPress={() => console.log("Resend code")}
          >
            <Text className="font-sans-bold">Resend Code</Text>
          </Pressable>
        </View>
        <Button
          label="Verify Code"
          variant="primary"
          onPress={handleSubmit(onSubmit)}
          size="sm"
        />
      </View>
    </ResetTemplate>
  );
}
