import { PasswordField, TextField } from "@/components/forms/rhf";
import { Button } from "@/components/ui/button";
import { Link } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";

export default function SignUp() {
  const [showPass, setShowPass] = useState({
    password: false,
    confirmPassword: false,
  });

  const { control } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const handleShowPassword = (field: keyof typeof showPass) => {
    setShowPass((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <ScrollView>
      {/* Form Fields would go here */}
      <View>
        <TextField
          name="fullName"
          control={control}
          label="Full Name"
          placeholder="Enter your full name"
        />
        <TextField
          name="email"
          control={control}
          label="Email"
          placeholder="Enter your email address"
        />
        <PasswordField
          name="password"
          control={control}
          label="Password"
          isPasswordVisible={showPass.password}
          togglePassword={() => handleShowPassword("password")}
          placeholder="Enter your password"
        />
        <PasswordField
          name="confirm_password"
          control={control}
          label="Confirm Password"
          isPasswordVisible={showPass.confirmPassword}
          togglePassword={() => handleShowPassword("confirmPassword")}
          placeholder="Enter your password"
        />
      </View>
      <View className="my-4">
        <Button label="Create Account" variant="primary" />
      </View>
      <View className="flex-row gap-1 justify-center">
        <Text>Already have an account?</Text>
        <Link href="/sign-in" className="self-center">
          <Text className="text-blue-600 font-medium">Sign In</Text>
        </Link>
      </View>
    </ScrollView>
  );
}
