import { colors } from "@/constants/colors";
import type {
  DarkColor,
  LightColor,
  PrimaryColor,
  ThemeConfig,
} from "./@types/theme";

const DEFAULT_DARK_COLOR: DarkColor = "cinder";
const DEFAULT_LIGHT_COLOR: LightColor = "slate";
const DEFAULT_PRIMARY_COLOR: PrimaryColor = "blue";

// Default theme configuration
export const defaultTheme: ThemeConfig = {
  themeMode: "light",
  isMonochrome: false,
  themeLayout: "main-layout",
  cardSkin: "bordered",

  darkColorScheme: {
    name: DEFAULT_DARK_COLOR,
    ...colors[DEFAULT_DARK_COLOR],
  },

  lightColorScheme: {
    name: DEFAULT_LIGHT_COLOR,
    ...colors[DEFAULT_LIGHT_COLOR],
  },

  primaryColorScheme: {
    name: DEFAULT_PRIMARY_COLOR,
    ...colors[DEFAULT_PRIMARY_COLOR],
  },

  notification: {
    isExpanded: false,
    position: "top-center",
    visibleToasts: 4,
  },
};
