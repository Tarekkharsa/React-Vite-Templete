import { IconButton, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

import Iconify from '@/components/Iconify';

const Root = styled('div')(({ theme }) => ({
  flexShrink: 0,
  marginLeft: theme.spacing(2.5),
}));

type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    page: number
  ) => void;
};

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Root>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? (
          <Iconify icon="bx:last-page" />
        ) : (
          <Iconify icon="bx:first-page" />
        )}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <Iconify icon="ic:baseline-keyboard-arrow-right" />
        ) : (
          <Iconify icon="ic:baseline-keyboard-arrow-left" />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <Iconify icon="ic:baseline-keyboard-arrow-left" />
        ) : (
          <Iconify icon="ic:baseline-keyboard-arrow-right" />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? (
          <Iconify icon="bx:first-page" />
        ) : (
          <Iconify icon="bx:last-page" />
        )}
      </IconButton>
    </Root>
  );
}
export default TablePaginationActions;
