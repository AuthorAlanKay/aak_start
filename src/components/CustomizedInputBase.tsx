import {
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  ListItemText,
  MenuItem
} from '@mui/material';
import * as React from 'react';
import { Icon } from '@iconify/react';
import { useAppSelector } from '../redux/hooks';

export interface IAppProps {}

// TODO ↓↑
export function CustomizedInputBase(props: IAppProps) {
  const inputRef = React.useRef(null);

  const searchEngine = useAppSelector((state) => state.setting.searchEngine);

  const [value, setValue] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => setOpen(true), []);

  const handleClose = React.useCallback(() => setOpen(false), []);

  const handleClear = React.useCallback(() => {
    setValue('');
    // @ts-ignore
    inputRef.current.children[0].focus();
  }, []);

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleSearch = React.useCallback(
    (value: string) => {
      if (value === '') return;
      if (searchEngine === 'google') {
        window.location.href = 'https://www.google.com/search?q=' + value;
      }
      if (searchEngine === 'bing') {
        window.location.href = 'https://www.bing.com/search?q=' + value;
      }
      if (searchEngine === 'baidu') {
        window.location.href = 'https://www.baidu.com/s?wd=' + value;
      }
    },
    [searchEngine]
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      console.log('🚀 event.keyCode', event.keyCode);

      if (event.keyCode === 13) {
        handleSearch(value);
      }
    },
    [value, handleSearch]
  );

  const handleRemain = React.useCallback(
    (value: string) => {
      setValue(value);
      handleSearch(value);
    },
    [handleSearch]
  );

  const handleDeleteHistory = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, key: number) => {
      event.stopPropagation();
    },
    []
  );

  const reminder = [
    { type: 'search-history', value: 'test-search-history-1' },
    { type: 'search-history', value: 'test-search-history-2' },
    { type: 'intellisense', value: 'intellisense-1' },
    { type: 'intellisense', value: 'intellisense-2' }
  ];

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box
        sx={{
          width: 570,
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(145, 158, 171, 0.24)',
          borderRadius: '25px',
          overflow: 'hidden',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? '#fff' : theme.palette.grey[900],
          '&:hover': {
            borderColor: 'transparent',
            boxShadow: (theme) => theme.shadows[3],
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#fff' : theme.palette.grey[800]
          }
        }}
      >
        <Box sx={{ p: '2px 4px', height: 45, display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <Icon icon="akar-icons:google-fill" width={20} height={20} />
          </IconButton>
          <InputBase
            ref={inputRef}
            sx={{
              ml: 1,
              flex: 1,
              '& .MuiInputBase-input': {
                padding: 0,
                fontSize: '16px'
              }
            }}
            autoFocus
            size="small"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            endAdornment={
              value === '' ? null : (
                <IconButton onClick={handleClear}>
                  <Icon icon="eva:close-outline" width={20} height={20} />
                </IconButton>
              )
            }
            onClick={handleOpen}
          />
          <IconButton onClick={() => handleSearch(value)}>
            <Icon icon="ant-design:search-outlined" width={20} height={20} />
          </IconButton>
        </Box>
        {open && reminder.length !== 0 ? (
          <>
            <Divider variant="middle" sx={{ mx: '12px' }} />
            <Box>
              {reminder.map((option, index) => (
                <MenuItem
                  key={index}
                  selected={option.value === value}
                  sx={{ py: 1, px: 1.5 }}
                  onClick={() => handleRemain(option.value)}
                >
                  <ListItemIcon sx={{ mr: 0 }}>
                    <Icon
                      icon={
                        option.type === 'intellisense'
                          ? 'ant-design:search-outlined'
                          : 'ic:sharp-access-time'
                      }
                      width={option.type === 'intellisense' ? 19 : 18}
                      height={option.type === 'intellisense' ? 19 : 18}
                    />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                    {option.value}
                  </ListItemText>
                  <Box sx={{ flex: 1 }} />
                  {option.type !== 'intellisense' ? (
                    <ListItemText
                      onClick={(event) => handleDeleteHistory(event, index)}
                      sx={{
                        flex: '0 auto',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                      primaryTypographyProps={{ variant: 'body2' }}
                    >
                      删除
                    </ListItemText>
                  ) : null}
                </MenuItem>
              ))}
            </Box>
          </>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
