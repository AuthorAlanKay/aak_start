import { Theme, ThemeOptions } from '@mui/material/styles';
import shadows, { customShadows } from '../shadow';
import breakpoints from './breakpoints';
import palette from './palette';
import shape from './shape';
import typography from './typography';

declare module '@mui/material/styles' {
  interface MuiTheme extends Theme {
    breakpoints: typeof breakpoints;
    palette: typeof palette.light;
    shadows: typeof shadows.light;
    shape: typeof shape;
    customShadows: typeof customShadows.light;
    typography: typeof typography;
  }

  // allow configuration using `createTheme`
  interface MuiThemeOptions extends ThemeOptions {
    breakpoints?: typeof breakpoints;
    palette?: typeof palette.light;
    shadows?: typeof shadows.light;
    shape?: typeof shape;
    customShadows?: typeof customShadows.light;
    typography?: typeof typography;
  }

  // function createTheme(options?: MuiThemeOptions): MuiTheme;
}
