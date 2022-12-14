import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
// material
import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles/createTheme';
import { useLayoutEffect, useMemo } from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

import useDarkMode from '@/hooks/useDarkMode';
import useLang from '@/hooks/useLang';
import { CustomTheme, CustomThemeOptions } from '@/theme/ThemeTypes';

//
import componentsOverride from './overrides';
import { dark, light } from './palette';
import shadows, { customShadows } from './shadows';
import typography from './typography';

const cacheLtr = createCache({
  key: 'muiltr',
});

const cacheRtl = createCache({
  key: 'muirtl',
  // prefixer is the only stylis plugin by default, so when
  // overriding the plugins you need to include it explicitly
  // if you want to retain the auto-prefixing behavior.
  stylisPlugins: [prefixer, rtlPlugin],
});
// ----------------------------------------------------------------------

function createCustomTheme(customOption: CustomThemeOptions): CustomTheme {
  const theme = createTheme(customOption as ThemeOptions);
  return { ...theme, customShadows: customOption.customShadows } as CustomTheme;
}

function ThemeConfig({ children }: any) {
  const { theme: themeInfo } = useDarkMode();
  const { lang } = useLang();

  useLayoutEffect(() => {
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, []);

  const themeOptions: CustomThemeOptions = useMemo(
    (): CustomThemeOptions => ({
      direction: lang === 'ar' ? 'rtl' : 'ltr',
      palette: themeInfo === 'dark' ? dark : light,
      shape: { borderRadius: 8 },
      typography,
      shadows: themeInfo === 'dark' ? shadows.dark : shadows.light,
      customShadows: themeInfo === 'dark' ? customShadows.dark : customShadows.light,
    }),
    [themeInfo, lang]
  );

  const customTheme: CustomTheme = createCustomTheme(themeOptions);
  customTheme.components = componentsOverride(customTheme);

  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={lang === 'ar' ? cacheRtl : cacheLtr}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}

export default ThemeConfig;
