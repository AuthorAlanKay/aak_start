import { MuiTheme } from "@mui/material";

export default function Timeline(theme: MuiTheme) {
  return {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },

    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider,
        },
      },
    },
  };
}
