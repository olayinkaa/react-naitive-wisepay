import { MAX_CARD_WIDTH, SCREEN_HORIZONTAL_PADDING } from "@/constants/layout";
import { useWindowDimensions } from "react-native";

export default function useScreen() {
  const { width } = useWindowDimensions();
  const containerWidth = Math.min(
    width - SCREEN_HORIZONTAL_PADDING,
    MAX_CARD_WIDTH,
  );

  return {
    containerWidth,
  };
}
