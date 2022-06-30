import { Switch } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import useDarkMode from '@/hooks/useDarkMode';

export default function Settings() {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <>
      <FormattedMessage id="dark_theme" />
      <Switch checked={theme === 'dark'} onChange={toggleTheme} />
    </>
  );
}
