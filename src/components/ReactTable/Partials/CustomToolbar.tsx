import { IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';

// component
import Iconify from '../../Iconify';
import { GlobalFilter } from './ReactTableFilters';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

// ----------------------------------------------------------------------

type CustomToolbarProps = {
  selectedRows: any[];
  onDelete: (rows: any[]) => void;
  preGlobalFilteredRows: any[];
  globalFilter: string;
  setGlobalFilter: (filter: string) => void;
};

export default function CustomToolbar({
  selectedRows,
  onDelete,
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: CustomToolbarProps) {
  const numSelected = selectedRows?.length;
  const handleDelete = () => {
    // eslint-disable-next-line
    onDelete && onDelete(selectedRows);
  };
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
          {numSelected} <FormattedMessage id="selected" />
        </Typography>
      ) : (
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDelete}>
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
