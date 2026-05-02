import { TextField } from "@/components/forms/rhf";
import ResetTemplate from "@/components/shared/reset-template";
import { Button } from "@/components/ui/button";
import {
  IniateResetInputs,
  InitiateResetSchema,
} from "@/validators/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";

export default function ResetPassword() {
  const { control, handleSubmit } = useForm<IniateResetInputs>({
    resolver: zodResolver(InitiateResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<IniateResetInputs> = async (data) => {
    try {
      console.log("FORM DATA:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push({
        pathname: "/reset/verify-code",
        params: { email: data.email },
      });
    } catch (error) {
      console.log("LOGIN ERROR:", error);
    }
  };

  return (
    <ResetTemplate
      title="Reset Your Password"
      description="Enter your email address and we'll send you a reset code"
      iconName="mail-sharp"
      currentStep={0}
    >
      <View className="mt-5">
        <TextField
          name="email"
          control={control}
          label="Email Address"
          placeholder="Enter your email"
        />
      </View>
      <View className="my-2">
        <Button
          label="Send Reset Code"
          variant="primary"
          size="sm"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ResetTemplate>
  );
}
