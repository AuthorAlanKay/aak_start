import { Box, Button, Container, Link, useTheme } from '@mui/material';
import * as React from 'react';
import { CustomizedInputBase } from '../components/CustomizedInputBase';

export interface IAppProps {}

export function Root(props: IAppProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Box sx={{ height: '25%' }} />
      <CustomizedInputBase />
      <Box sx={{ flex: 1 }} />
      <Box
        sx={{
          width: '100vw',
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : '#171717'
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1.25, 2.5),
            color: theme.palette.mode === 'light' ? '#70757a' : '#999da2'
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
          <Button color="inherit" sx={{ fontWeight: 400 }}>
            设置
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
