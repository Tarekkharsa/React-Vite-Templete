import { Theme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';

import { CustomShadow } from '@/theme/shadows';

export type CustomThemeOptions = ThemeOptions & {
  customShadows: CustomShadow;
};

export type CustomTheme = Theme & {
  customShadows: CustomShadow;
  palette:
    | {
        chart?: ChartTheme;
        grey: {
          '500_16': string;
          '500_32': string;
          '500_56': string;
          '500_12': string;
        };
      }
    | any;
};
