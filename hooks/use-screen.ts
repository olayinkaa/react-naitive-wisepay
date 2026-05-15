import { MAX_CARD_WIDTH, SCREEN_HORIZONTAL_PADDING } from "@/constants/layout";
import { useWindowDimensions } from "react-native";

export default function useScreen() {
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;
  const isDesktop = width >= 1024;

  const containerWidth = isDesktop ? 900 : isTablet ? width - 80 : width - 32;
  const cardScrollHeight = isTablet ? 800 : 400;

  return {
    width,
    isTablet,
    isDesktop,
    containerWidth,
    cardScrollHeight
  };
}

export function useScreen2() {
  const { width } = useWindowDimensions();
  const containerWidth = Math.min(
    width - SCREEN_HORIZONTAL_PADDING,
    MAX_CARD_WIDTH,
  );

  return {
    containerWidth,
  };
}
