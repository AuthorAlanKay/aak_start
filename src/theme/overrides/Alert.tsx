import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { MuiTheme } from "@mui/material";

export default function Alert(theme: MuiTheme) {
  const isLight = useMemo(() => theme.palette.mode === "light", [theme]);

  const standardStyle = (color: string) => ({
    color: theme.palette[color][isLight ? "darker" : "lighter"],
    backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
    "& .MuiAlert-icon": {
      color: theme.palette[color][isLight ? "main" : "light"],
    },
  });

  const filledStyle = (color: string) => ({
    color: theme.palette[color].contrastText,
  });

  const outlinedStyle = (color: string) => ({
    color: theme.palette[color][isLight ? "darker" : "lighter"],
    border: `solid 1px ${theme.palette[color][isLight ? "light" : "dark"]}`,
    backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
    "& .MuiAlert-icon": {
      color: theme.palette[color][isLight ? "main" : "light"],
    },
  });

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: <Icon icon="eva:info-fill" />,
          info: <Icon icon="eva:alert-circle-fill" />,
          success: <Icon icon="eva:checkmark-circle-2-fill" />,
          warning: <Icon icon="eva:alert-triangle-fill" />,
        },
      },

      styleOverrides: {
        message: {
          "& .MuiAlertTitle-root": {
            marginBottom: theme.spacing(0.5),
          },
        },
        action: {
          "& button:not(:first-of-type)": {
            marginLeft: theme.spacing(1),
          },
        },

        standardInfo: standardStyle("info"),
        standardSuccess: standardStyle("success"),
        standardWarning: standardStyle("warning"),
        standardError: standardStyle("error"),

        filledInfo: filledStyle("info"),
        filledSuccess: filledStyle("success"),
        filledWarning: filledStyle("warning"),
        filledError: filledStyle("error"),

        outlinedInfo: outlinedStyle("info"),
        outlinedSuccess: outlinedStyle("success"),
        outlinedWarning: outlinedStyle("warning"),
        outlinedError: outlinedStyle("error"),
      },
    },
  };
}
