import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#e6faff",
    100: "#bff0ff",
    200: "#99e5ff",
    300: "#73daff",
    400: "#4dd0ff",
    500: "#00c2ff", // neon cyan
    600: "#00a1d4",
    700: "#0080aa",
    800: "#005f7f",
    900: "#003e55",
  },
  magenta: {
    500: "#ff1f8f",
  },
  purple: {
    500: "#9b5cff",
  },
};

const styles = {
  global: {
    "html, body, #__next": {
      height: "100%",
      backgroundColor: "#0a0c10", // deep space
      color: "gray.100",
    },
    body: {
      bgGradient: "linear(to-b, #0a0c10, #0c0f14)",
    },
    "*::selection": {
      background: "rgba(0,194,255,0.25)",
      color: "white",
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: "12px",
      fontWeight: "semibold",
    },
    variants: {
      neon: {
        bg: "transparent",
        color: "brand.500",
        border: "1px solid",
        borderColor: "brand.500",
        boxShadow:
          "0 0 16px rgba(0,194,255,0.45), inset 0 0 8px rgba(0,194,255,0.2)",
        _hover: {
          bg: "rgba(0,194,255,0.08)",
          transform: "translateY(-1px)",
        },
        _active: {
          transform: "translateY(0)",
        },
      },
      solid: {
        bg: "brand.500",
        color: "#0a0c10",
        boxShadow: "0 0 16px rgba(0,194,255,0.6)",
        _hover: { bg: "brand.400" },
      },
    },
    defaultProps: {
      variant: "neon",
      colorScheme: "brand",
    },
  },
  Link: {
    baseStyle: {
      color: "gray.200",
      _hover: { color: "white", textDecoration: "none" },
    },
  },
  Card: {
    baseStyle: {
      bg: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(6px)",
      boxShadow: "0 0 24px rgba(0,194,255,0.08)",
      borderRadius: "16px",
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  styles,
  components,
  config,
  fonts: {
    heading: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
});

export default theme;
