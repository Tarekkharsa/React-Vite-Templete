import { InputAdornment, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

import Iconify from '@/components/Iconify';
import { GlobalFilterProps } from '@/components/ReactTable/Partials/CustomToolbarProps';
import { CustomTheme } from '@/theme/ThemeTypes';

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: (theme as CustomTheme).customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${(theme as CustomTheme).palette.grey['500_32']} !important`,
  },
}));

export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: GlobalFilterProps) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((val) => {
    setGlobalFilter(val || undefined);
  }, 200);

  return (
    <SearchStyle
      value={value || ''}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`${count} records...`}
      startAdornment={
        <InputAdornment position="start">
          <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
        </InputAdornment>
      }
    />
  );
}
