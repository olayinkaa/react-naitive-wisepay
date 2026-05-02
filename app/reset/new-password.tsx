import { PasswordField } from "@/components/forms/rhf";
import PasswordRequirement from "@/components/shared/password/password-requirement";
import ResetTemplate from "@/components/shared/reset-template";
import { Button } from "@/components/ui/button";
import {
  ChangePasswordInputs,
  changePasswordSchema,
} from "@/validators/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Keyboard, View } from "react-native";

export default function NewPassword() {
  const [showPass, setShowPass] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const { control, handleSubmit } = useForm<ChangePasswordInputs>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<ChangePasswordInputs> = async (data) => {
    Keyboard.dismiss(); // Dismiss manually once logic starts
    try {
      console.log("FORM DATA:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.log("LOGIN ERROR:", error);
    }
  };

  const handleShowPassword = (field: keyof typeof showPass) => {
    setShowPass((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // const handleOpenAlert = () => {
  //   Alert.alert("warning!", "Are you sure you want to proceed ?", [
  //     {
  //       text: "Cancel",
  //       style: "cancel",
  //     },
  //     {
  //       text: "Yes, Proceed",
  //       style: "destructive",
  //       onPress: () => console.log("User confirmed action"),
  //     },
  //   ]);
  // };

  return (
    <ResetTemplate
      title="Create New Password"
      description="Choose a strong password for your account"
      iconName="shield-outline"
      currentStep={3}
    >
      <View className="mt-5">
        <PasswordField
          name="newPassword"
          control={control}
          label="Password"
          isPasswordVisible={showPass.newPassword}
          togglePassword={() => handleShowPassword("newPassword")}
          placeholder="Enter your password"
        />
        <PasswordField
          name="confirmPassword"
          control={control}
          label="Confirm Password"
          isPasswordVisible={showPass.confirmPassword}
          togglePassword={() => handleShowPassword("confirmPassword")}
          placeholder="Confirm new password"
        />
      </View>
      <View>
        <PasswordRequirement />
      </View>
      <View className="mt-4">
        <Button
          label="Reset Password"
          variant="primary"
          onPress={handleSubmit(onSubmit)}
          // onPress={handleOpenAlert}
          size="sm"
        />
      </View>
    </ResetTemplate>
  );
}
