import { Button, Container, createSvgIcon, IconButton, styled } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  width: '100vw',
  position: 'absolute'
}));

const AppIcon = createSvgIcon(
  <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />,
  'App'
);

export interface IAppProps {}

export function RootLayout(props: IAppProps) {
  return (
    <Container maxWidth="lg" sx={{ height: '100%' }}>
      <HeaderStyle>
        <Container
          maxWidth="lg"
          sx={{
            padding: (theme) => theme.spacing(1.25, 2.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '12px'
          }}
        >
          <IconButton>
            <AppIcon
              sx={{ color: (theme) => (theme.palette.mode === 'light' ? '#5f6368' : '#ffffff') }}
            />
          </IconButton>
          <Button variant="contained" color="info">
            登录
          </Button>
        </Container>
      </HeaderStyle>
      <Outlet />
    </Container>
  );
}
