import * as tokens from "../tokens/constants"; // update path

export const colors = {
  ...tokens.colors,
  "warning-400": "#EA9800",
  // Add manual colors or overrides here
};

export const spacing = {
  ...tokens.spacing,
};

export const fonts = {
  ...tokens.fonts,
};

export const linearGradient = {
  gradients: {
    ...tokens.linearGradient.gradients,
    // Add your manual gradient here
    accent: ["#FBD8BC33", "#FBD8BC33"],
    dark: ["#000000", "#322E2ECC"],
  },
} as const;

export type ColorKeys = keyof typeof colors;
export type SpacingKeys = keyof typeof spacing;
export type FontKeys = keyof typeof fonts;
