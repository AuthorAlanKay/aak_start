import { MuiTheme } from "@mui/material";

export default function Autocomplete(theme: MuiTheme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
