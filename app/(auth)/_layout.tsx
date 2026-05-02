import { cn } from "@/lib/utils";
import { Link, Slot, usePathname } from "expo-router";
import {
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";

import Wrapper from "@/components/shared/wrapper";
import { MAX_CARD_WIDTH, SCREEN_HORIZONTAL_PADDING } from "@/constants/layout";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function AuthLayout() {
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  // Calculate universal width:
  // Phone: Full width - 64px padding | Tablet: Capped at 450px
  const containerWidth = Math.min(
    width - SCREEN_HORIZONTAL_PADDING,
    MAX_CARD_WIDTH,
  );

  // Helper to check active state - ensures stability
  const isSignIn = pathname === "/sign-in";
  const isSignUp = pathname === "/sign-up";

  return (
    <Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          bottomOffset={10}
        >
          <View style={{ width: containerWidth }}>
            <View className="items-center gap-3 mb-4">
              <View className="bg-black size-12 rounded-2xl items-center justify-center">
                <Text className="text-white text-2xl font-sans-bold">W</Text>
              </View>
              <Text className="font-sans-bold text-h4">Welcome to WisePay</Text>
              <Text className="text-mist font-sans-light text-center  text-psm">
                Send money globally with the real exchange rate
              </Text>
            </View>

            {/* 2. Form Card */}
            <View className="card">
              <View className="gap-1 mb-6">
                <Text className="font-sans-bold text-lg">Get Started</Text>
                <Text className="text-mist text-base font-sans-light">
                  Sign in to your account or create a new one
                </Text>
              </View>

              {/* 3. Segmented Control (Toggle) */}
              <View className="bg-mist-100 p-1 mb-6 rounded-full flex-row">
                <Link href="/(auth)/sign-in" replace asChild>
                  <Pressable
                    key="tab-signin"
                    className={cn(
                      "will-change-variable flex-1 items-center py-2 rounded-full",
                      isSignIn ? "bg-white shadow-sm" : "bg-transparent",
                    )}
                  >
                    <Text className="font-sans-bold">Sign In</Text>
                  </Pressable>
                </Link>

                <Link href="/(auth)/sign-up" replace asChild>
                  <Pressable
                    key="tab-signup"
                    className={cn(
                      "will-change-variable flex-1 items-center py-2 rounded-full",
                      isSignUp ? "bg-white shadow-sm" : "bg-transparent",
                    )}
                  >
                    <Text className="font-sans-bold">Sign Up</Text>
                  </Pressable>
                </Link>
              </View>

              {/* 4. Swappable Form Content */}
              <View>
                <Slot />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
}
