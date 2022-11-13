import { IconButton, InputBase, Paper, useTheme } from '@mui/material';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Icon } from '@iconify/react';

export interface IAppProps {}

export function CustomizedInputBase(props: IAppProps) {
  const theme = useTheme();

  return (
    <Paper
      variant="outlined"
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 570,
        height: 45,
        borderRadius: '25px',
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.grey[900],
        '&:hover': {
          boxShadow: theme.shadows[3],
          backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.grey[800]
        }
      }}
    >
      <IconButton>
        <Icon icon="akar-icons:google-fill" width={20} height={20} />
      </IconButton>
      <InputBase
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
      />
      <IconButton>
        <SearchIcon width={20} height={20} />
      </IconButton>
    </Paper>
  );
}
