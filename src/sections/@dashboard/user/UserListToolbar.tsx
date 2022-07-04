import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
// material
import { styled } from '@mui/material/styles';

import * as React from 'react';
import { CustomTheme } from '@/theme/ThemeTypes';

// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: (theme as CustomTheme).customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${(theme as CustomTheme).palette.grey[500_32]} !important`,
  },
}));

// ----------------------------------------------------------------------
type ChangeEventHandler = React.ChangeEventHandler<
  HTMLTextAreaElement | HTMLInputElement
>;
type UserListToolbarProps = {
  numSelected: number;
  filterName: string;
  onFilterName: ChangeEventHandler;
};

export default function UserListToolbar({
  numSelected,
  filterName,
  onFilterName,
}: UserListToolbarProps) {
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder="Search user..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      )}
    </RootStyle>
  );
}
