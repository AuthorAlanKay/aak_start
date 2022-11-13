import { MuiTheme } from "@mui/material";

export default function Skeleton(theme: MuiTheme) {
  return {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },

      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
}
