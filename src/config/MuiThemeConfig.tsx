import * as React from 'react';
import breakpoints from '../theme/breakpoints';
import palette from '../theme/palette';
import shadows, { customShadows } from '../theme/shadow';
import shape from '../theme/shape';
import typography from '../theme/typography';
import componentsOverride from '../theme/overrides';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
  MuiTheme
} from '@mui/material';
import GlobalStyles from '../theme/globalStyles';
import { useAppSelector } from '../redux/hooks';

export interface IAppProps {
  children: React.ReactNode;
}

export function MuiThemeConfig(props: IAppProps) {
  const isLight = useAppSelector((state) => state.setting.isLight);

  const themeOptions = React.useMemo(
    () => ({
      shape,
      typography,
      breakpoints,
      palette: isLight ? palette.light : palette.dark,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark
    }),
    [isLight]
  );

  // @ts-ignore
  const theme: MuiTheme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
