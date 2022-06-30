import { Theme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';

import { CustomShadow } from '@/theme/shadows';

export type CustomThemeOptions = ThemeOptions & {
  customShadows: CustomShadow;
};

export type CustomTheme = Theme & {
  customShadows: CustomShadow;
};
