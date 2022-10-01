import { colors } from "./colors";

interface Theme {
  colors: typeof colors;
}

export const theme: Theme = {
  colors,
};
