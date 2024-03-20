import { extendTheme } from "@chakra-ui/react";
import { Colors } from "./colors.theme";
import { FontWeight } from "./typography.theme";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: Colors.text,
        FontWeight: FontWeight.normal,
        fontSize: "16px",
      },
      // styles for the `a`
      a: {
        color: Colors.primary,
        FontWeight: FontWeight.semiBold,
        transistion: ".15s ease all",
        _hover: {
          color: Colors.primaryDark,
          transistion: ".15s ease all",
        },
      },
    },
  },
  colors: {
    error: Colors.error,
    waring: Colors.error,
    success: Colors.success,
    info: Colors.secondary,
    text: {
      default: Colors.grayDark,
    },
    primary: {
      default: Colors.primary,
    },
    secondary: {
      default: Colors.secondary,
    },
  },
});
