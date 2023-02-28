import { createTheme } from "@mui/material"
import { deepmerge } from "@mui/utils"
const colors = require("tailwindcss/colors")

export const themeColor = deepmerge(colors, {
  primary: {
    main: "#ea580c",
    light: "#3870FF",
    dark: "#0036C8",
  },
  secondary: {
    main: colors.neutral[700],
    light: colors.neutral[400],
    dark: colors.neutral[900],
  },
})

const LIGHT = {
  palette: {
    ...themeColor,
    grey: themeColor.neutral,
    common: {
      black: themeColor.black,
      white: themeColor.white,
    },
    background: {
      default: themeColor.white,
      paper: themeColor.white,
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
    fontSize: 14,
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          minWidth: "unset",
          textTransform: "inherit",
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: themeColor.gray[100],
            borderRadius: "4px",

            "&.Mui-focused:after": { opacity: 1 },
            "& fieldset": { border: 0 },
            "&::before,&::after": { content: "none" },
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {},
        maxWidthLg: {
          "&.MuiContainer-maxWidthLg": {
            maxWidth: 1200,
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
}

export const LIGHTTHEME = createTheme(LIGHT)
