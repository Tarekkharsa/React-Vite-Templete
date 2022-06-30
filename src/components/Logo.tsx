// material
import { Box, SxProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// ----------------------------------------------------------------------
type LogoProps = {
  sx?: SxProps;
};

export default function Logo({ sx }: LogoProps) {
  return (
    <RouterLink to="/">
      <Box
        component="img"
        src="/static/logo3.svg"
        sx={{ width: 70, height: 70, ...sx }}
      />
    </RouterLink>
  );
}
