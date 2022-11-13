import { MuiTheme } from "@mui/material";

export default function Progress(theme: MuiTheme) {
  const isLight = theme.palette.mode === "light";

  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          overflow: "hidden",
        },
        bar: {
          borderRadius: 4,
        },
        colorPrimary: {
          backgroundColor:
            theme.palette.primary[isLight ? "lighter" : "darker"],
        },
        buffer: {
          backgroundColor: "transparent",
        },
      },
    },
  };
}
