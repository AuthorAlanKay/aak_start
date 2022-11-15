import * as React from 'react';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import {
  AutocompleteInputChangeReason,
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  ListItemText,
  MenuItem
} from '@mui/material';
import { Icon } from '@iconify/react';
import { useAppSelector } from '../redux/hooks';

export interface IAppProps {}

export default function CustomizedAutocomplete(_props: IAppProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => setOpen(true), []);

  const handleClose = React.useCallback(() => setOpen(false), []);

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = React.useCallback(
    (_event: React.SyntheticEvent<Element, Event>, value: string, _reason: AutocompleteInputChangeReason) => {
      setInputValue(value);
    },
    []
  );

  const [options, setOptions] = React.useState([
    { type: 'search-history', value: 'test-search-history-1' },
    { type: 'search-history', value: 'test-search-history-2' },
    { type: 'intellisense', value: 'intellisense-1' },
    { type: 'intellisense', value: 'intellisense-2' }
  ]);

  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions, focused } = useAutocomplete({
    open,
    options,
    inputValue,
    filterOptions: (x) => x,
    id: 'customized-autocomplete',
    onInputChange: handleInputChange,
    getOptionLabel: (option) => option.value
    // onHighlightChange: (event, option, reason) => {
    //   if (event?.type === 'keydown' && option && option.value !== inputValue) {
    //     console.log(event, option);
    //     setInputValue(option.value);
    //   }
    // }
  });

  const inputBaseRef = React.useRef(null);

  const handleClear = React.useCallback(() => {
    setInputValue('');
    // @ts-ignore
    inputBaseRef.current.children[0].focus();
  }, []);

  const searchEngine = useAppSelector((state) => state.setting.searchEngine);

  const handleSearch = React.useCallback(
    (value: string) => {
      if (value === '') return;
      if (searchEngine === 'google') {
        window.location.href = 'https://www.bing.com/search?q=' + value;
        // window.location.href = 'https://www.google.com/search?q=' + value;
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
      // console.log('🚀 event.keyCode', event.keyCode);
      if (event.keyCode === 13) {
        handleSearch(inputValue);
      }
    },
    [inputValue, handleSearch]
  );

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
          backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#fff' : theme.palette.grey[900]),
          '&:hover': {
            borderColor: 'transparent',
            boxShadow: (theme) => theme.shadows[3],
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#fff' : theme.palette.grey[800])
          },
          ...(focused && {
            borderColor: 'transparent',
            boxShadow: (theme) => theme.shadows[3],
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#fff' : theme.palette.grey[800])
          })
        }}
        {...getRootProps()}
      >
        <Box sx={{ p: '2px 4px', height: 45, display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <Icon icon="akar-icons:google-fill" width={20} height={20} />
          </IconButton>
          <InputBase
            autoFocus
            size="small"
            ref={inputBaseRef}
            onClick={handleOpen}
            onKeyDown={handleKeyDown}
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ sx: { padding: 0, fontSize: '0.875rem' }, ...getInputProps() }}
            endAdornment={
              inputValue === '' ? null : (
                <IconButton onClick={handleClear}>
                  <Icon icon="eva:close-outline" width={20} height={20} />
                </IconButton>
              )
            }
          />
          <IconButton onClick={() => handleSearch(inputValue)}>
            <Icon icon="ant-design:search-outlined" width={20} height={20} />
          </IconButton>
        </Box>
        {open && groupedOptions.length > 0 ? (
          <>
            <Divider variant="middle" sx={{ mx: '12px' }} />
            <Box component="ul" sx={{ mb: '2px' }} {...getListboxProps()}>
              {(groupedOptions as typeof options).map((option, index) => (
                <MenuItem key={index} sx={{ py: 1, px: 1.5 }} {...getOptionProps({ option, index })}>
                  <ListItemIcon sx={{ mr: 0, pl: '2.5px' }}>
                    <Icon
                      icon={option.type === 'intellisense' ? 'ant-design:search-outlined' : 'ic:sharp-access-time'}
                      width={16}
                      height={16}
                    />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ variant: 'body2' }}>{option.value}</ListItemText>
                  <Box sx={{ flex: 1 }} />
                  {option.type !== 'intellisense' ? (
                    <ListItemText
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
