// @mui
import { Breakpoint } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

const QueryTypes = ['up', 'down', 'only'] as const;
type ResponsiveProps =
  | {
      query: typeof QueryTypes[number];
      key: Breakpoint;
    }
  | {
      query: 'between';
      key: Breakpoint;
      start: Breakpoint;
      end: Breakpoint;
    };

export default function useResponsive(props: ResponsiveProps) {
  const theme = useTheme();

  switch (props.query) {
    case 'up':
      return useMediaQuery(theme.breakpoints.up(props.key));
    case 'down':
      return useMediaQuery(theme.breakpoints.down(props.key));
    case 'only':
      return useMediaQuery(theme.breakpoints.only(props.key));
    case 'between':
      return useMediaQuery(theme.breakpoints.between(props.start, props.end));
    default:
      return null;
  }
}
