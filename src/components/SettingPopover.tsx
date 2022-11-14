import { Button, Divider, ListItemText, MenuItem, Popover } from '@mui/material';
import * as React from 'react';
import { changeTheme } from '../redux/features/settingSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export interface IAppProps {}

export function SettingPopover(props: IAppProps) {
  const dispatch = useAppDispatch();

  const anchorRef = React.useRef(null);

  const setting = useAppSelector((state) => state.setting);

  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => setOpen(true), []);

  const handleClose = React.useCallback(() => setOpen(false), []);

  return (
    <>
      <Button ref={anchorRef} color="inherit" sx={{ fontWeight: 400 }} onClick={handleOpen}>
        设置
      </Button>
      <Popover
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { py: 1, width: 200 } }}
        anchorEl={anchorRef.current}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <MenuItem key="search-setting" sx={{ py: 1, px: 2.5 }}>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>搜索设置</ListItemText>
        </MenuItem>
        <MenuItem key="search-history" sx={{ py: 1, px: 2.5 }}>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>搜索历史</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem
          key="change-theme"
          onClick={() => dispatch(changeTheme())}
          sx={{ py: 1, px: 2.5 }}
        >
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            深色模式：{setting.isLight ? '已停用' : '已启用'}
          </ListItemText>
        </MenuItem>
      </Popover>
    </>
  );
}
