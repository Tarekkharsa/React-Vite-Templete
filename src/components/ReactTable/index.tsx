// material
import {
  Card,
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { forwardRef, useEffect, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';

import SearchNotFound from '../SearchNotFound';
import TablePaginationActions from './TablePaginationActions';

const TableFooterPagination = styled(TableFooter)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  margin: '3px 0 ',
}));
const CustomPagination = styled('span')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  margin: '3px 0 ',
}));
const TableRowPagination = styled(TableRow)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  margin: '3px 0 ',
}));
const CustomFormControl = styled(FormControl)(({ theme }) => ({
  marginLeft: theme.direction === 'ltr' ? '10px' : 'unset',
  marginRight: theme.direction === 'rtl' ? '10px' : 'unset',
}));

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return <Checkbox ref={resolvedRef} {...rest} />;
});

function ReactTable({
  columns,
  hiddenColumns,
  data: tableData,
  fetchData,
  // pageCount: controlledPageCount,
  totalRecords,
  getSelectedRows,
  // onDelete,
  isPaginated = true,
}: any) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize, selectedRowIds, globalFilter },
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: { pageIndex: 0, hiddenColumns, pageSize: 10 },
      // manualPagination: true,
      // pageCount: controlledPageCount,
      autoResetPage: false,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      // eslint-disable-next-line
      getSelectedRows &&
        hooks.visibleColumns.push((customColumns) => [
          {
            id: 'selection',
            // eslint-disable-next-line
            Header: ({ getToggleAllPageRowsSelectedProps }) => (
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            ),
            // eslint-disable-next-line
            Cell: ({ row }) => (
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            ),
            style: {
              padding: '0 0 0 4px',
            },
          },
          ...customColumns,
        ]);
    }
  );

  useEffect(() => {
    // eslint-disable-next-line
    fetchData && fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  useEffect(() => {
    // eslint-disable-next-line
    getSelectedRows && getSelectedRows({ selectedRowIds, selectedFlatRows });
  }, [getSelectedRows, selectedRowIds, selectedFlatRows]);

  const handleChangePage = (newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    gotoPage(0);
  };

  return (
    <Card>
      {/* <CustomToolbar
        selectedRows={selectedFlatRows || []}
        onDelete={onDelete}
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      /> */}

      <TableContainer sx={{ minWidth: 800 }}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    sx={column?.style ? column?.style : null}
                    {...column.getHeaderProps()}>
                    {typeof column.render('Header') !== 'object' ? (
                      <FormattedMessage id={column.render('Header')} />
                    ) : (
                      column.render('Header')
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell
                        sx={cell.column?.style ? cell.column?.style : null}
                        align="left"
                        {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
          {page.length === 0 && (
            <TableBody>
              <TableRow>
                <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                  <SearchNotFound searchQuery={globalFilter} />
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>

      {Boolean(isPaginated) && (
        <TableFooterPagination>
          <TableRowPagination>
            <CustomPagination>
              <FormattedMessage id="jump_to_page" />:
              <CustomFormControl size="small" variant="outlined">
                <Select
                  value={pageIndex + 1}
                  onChange={(e) => {
                    gotoPage(e.target.value ? Number(e.target.value) - 1 : 0);
                  }}>
                  {pageOptions.map((pageSizeOptions) => (
                    <MenuItem key={pageSizeOptions} value={pageSizeOptions + 1}>
                      {pageSizeOptions + 1}
                    </MenuItem>
                  ))}
                </Select>
              </CustomFormControl>
            </CustomPagination>
            <TablePaginationActions
              rowsPerPageOptions={[50, 100, 200, 500]}
              colSpan={3}
              count={totalRecords}
              rowsPerPage={pageSize}
              page={pageIndex}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRowPagination>
        </TableFooterPagination>
      )}
    </Card>
  );
}

export default ReactTable;
