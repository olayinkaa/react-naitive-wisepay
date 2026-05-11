import { PasswordField, TextField } from "@/components/forms/rhf";
import { Button } from "@/components/ui/button";
import { SigninInputs, SigninSchema } from "@/validators/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
// import { toast } from "react-native-sonner";

export default function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const { control, handleSubmit } = useForm<SigninInputs>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SigninInputs> = async (data) => {
    try {
      console.log("FORM DATA:", data);

      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: call your login API here
    } catch (error) {
      console.log("LOGIN ERROR:", error);
    }
  };

  return (
    <Animated.View entering={FadeIn.duration(1000)}>
      {/* Form Fields would go here */}
      <View>
        <TextField
          name="email"
          control={control}
          label="Email"
          placeholder="Enter your email"
        />
        <PasswordField
          name="password"
          control={control}
          label="Password"
          isPasswordVisible={showPass}
          togglePassword={() => setShowPass(!showPass)}
          placeholder="Enter your password"
        />
      </View>

      <View className="my-4">
        <Button
          label="Sign In"
          variant="primary"
          onPress={handleSubmit(onSubmit)}
          size="sm"
          // onPress={() => {
          //   toast.warning("Action Successful", {
          //     description: "Your changes have been saved to the cloud.",
          //   });
          // }}
        />
      </View>

      <Link href="/(tabs)/home" className="self-end">
        <Text className="text-blue-600 font-medium">Forgot Password?</Text>
      </Link>
    </Animated.View>
  );
}
