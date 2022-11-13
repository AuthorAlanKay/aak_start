import { Icon } from "@iconify/react";
import { MuiTheme } from "@mui/material";
import Box from "@mui/material/Box";

const ICON_SIZE = { width: 20, height: 20 };

export default function TreeView(theme: MuiTheme) {
  return {
    MuiTreeView: {
      defaultProps: {
        defaultCollapseIcon: (
          <Icon icon="eva:minus-square-outline" {...ICON_SIZE} />
        ),
        defaultExpandIcon: (
          <Icon icon="eva:plus-square-outline" {...ICON_SIZE} />
        ),
        defaultEndIcon: (
          <Box
            component={Icon}
            icon="eva:close-square-outline"
            {...ICON_SIZE}
            sx={{ color: "text.secondary" }}
          />
        ),
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        label: { ...theme.typography.body2 },
        iconContainer: { width: "auto" },
      },
    },
  };
}
