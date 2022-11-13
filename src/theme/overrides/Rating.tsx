import { Icon } from "@iconify/react";
import { MuiTheme, SvgIcon } from "@mui/material";

const ICON_SMALL = { width: 20, height: 20 };
const ICON_LARGE = { width: 28, height: 28 };

const ICON = (
  <SvgIcon>
    <Icon icon="eva:star-fill" />
  </SvgIcon>
);

export default function Rating(theme: MuiTheme) {
  return {
    MuiRating: {
      defaultProps: {
        emptyIcon: ICON,
        icon: ICON,
      },

      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.48,
          },
        },
        iconEmpty: { color: theme.palette.grey[500_48] },
        sizeSmall: { "& svg": { ...ICON_SMALL } },
        sizeLarge: { "& svg": { ...ICON_LARGE } },
      },
    },
  };
}
