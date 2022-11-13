import { MuiTheme } from "@mui/material";

export default function Popover(theme: MuiTheme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z12,
        },
      },
    },
  };
}
