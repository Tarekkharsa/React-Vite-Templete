// ----------------------------------------------------------------------

import { CustomTheme } from '@/theme/ThemeTypes';

export default function Autocomplete(theme: CustomTheme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
