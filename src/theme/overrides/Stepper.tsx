import { MuiTheme } from "@mui/material";

export default function Stepper(theme: MuiTheme) {
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider,
        },
      },
    },
  };
}
