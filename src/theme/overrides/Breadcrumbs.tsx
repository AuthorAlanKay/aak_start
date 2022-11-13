import { MuiTheme } from "@mui/material";

export default function Breadcrumbs(theme: MuiTheme) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
        },
      },
    },
  };
}
