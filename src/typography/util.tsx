export type TextSize =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge"
  | "xxxxlarge";

export const SIZE_TO_CLASS: Record<TextSize, string> = {
  xsmall: "xs",
  small: "sm",
  medium: "base",
  large: "lg",
  xlarge: "xl",
  xxlarge: "2xl",
  xxxlarge: "3xl",
  xxxxlarge: "4xl",
};
