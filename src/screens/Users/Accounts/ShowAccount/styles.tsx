import { makeStyles } from '@mui/material';

import { CustomTheme } from '@/theme/ThemeTypes';

const useStyles = makeStyles((theme: CustomTheme) => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: ' 0 24px 24px',
  },
  li: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descLi: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  inline: {
    display: 'inline',
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export default useStyles;
