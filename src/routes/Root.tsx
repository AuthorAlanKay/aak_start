import { Box, Container, Link } from '@mui/material';
import * as React from 'react';
import { AuthorLogo } from '../components/AuthorLogo';
import { CustomizedInputBase } from '../components/CustomizedInputBase';
import { SettingPopover } from '../components/SettingPopover';

export interface IAppProps {}

export function Root(props: IAppProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <AuthorLogo />

      <CustomizedInputBase />

      <Box sx={{ flex: 1 }} />

      <Box
        sx={{
          width: '100vw',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[200] : '#171717'
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: (theme) => theme.spacing(1.25, 2.5),
            color: (theme) => (theme.palette.mode === 'light' ? '#70757a' : '#999da2')
          }}
        >
          <Link
            href="https://beian.miit.gov.cn/"
            color="inherit"
            variant="button"
            sx={{ fontWeight: 400 }}
          >
            鲁ICP备2022007626号-1
          </Link>
          <Box sx={{ flex: 1 }} />
          <SettingPopover />
        </Container>
      </Box>
    </Box>
  );
}
